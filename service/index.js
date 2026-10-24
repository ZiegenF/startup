const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const express = require('express');
const uuid = require('uuid');
const app = express();

const authCookieName = 'token';

// Users, pets, and log entries are saved in memory for now.
// They will move to MongoDB in the DB deliverable.
let users = [];
let pets = [];
let entries = [];

// The service port. In production the frontend is served by this service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// JSON body parsing
app.use(express.json());

// Cookie parser for the auth token
app.use(cookieParser());

// Serve the React frontend
app.use(express.static('public'));

// Router for the service endpoints
const apiRouter = express.Router();
app.use('/api', apiRouter);

// ----- Auth endpoints -----

// Create a new user
apiRouter.post('/auth/create', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).send({ msg: 'Username and password are required' });
  } else if (findUser('email', email)) {
    res.status(409).send({ msg: 'That username is already taken' });
  } else {
    const user = await createUser(email, password);
    setAuthCookie(res, user.token);
    res.send({ email: user.email });
  }
});

// Login an existing user
apiRouter.post('/auth/login', async (req, res) => {
  const user = findUser('email', req.body.email);
  if (user && (await bcrypt.compare(req.body.password, user.password))) {
    user.token = uuid.v4();
    setAuthCookie(res, user.token);
    res.send({ email: user.email });
    return;
  }
  res.status(401).send({ msg: 'Wrong username or password' });
});

// Logout a user
apiRouter.delete('/auth/logout', (req, res) => {
  const user = findUser('token', req.cookies[authCookieName]);
  if (user) {
    delete user.token;
  }
  res.clearCookie(authCookieName);
  res.status(204).end();
});

// Middleware that only lets logged in users through
function verifyAuth(req, res, next) {
  const user = findUser('token', req.cookies[authCookieName]);
  if (user) {
    req.user = user;
    next();
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
}

// ----- Pet endpoints (restricted) -----

apiRouter.get('/pets', verifyAuth, (req, res) => {
  res.send(pets.filter((pet) => pet.owner === req.user.email));
});

apiRouter.post('/pets', verifyAuth, (req, res) => {
  const { name, species, breed, birthday, weight } = req.body;
  if (!name) {
    res.status(400).send({ msg: 'Pet name is required' });
    return;
  }
  const pet = { id: uuid.v4(), owner: req.user.email, name, species, breed, birthday, weight };
  pets.push(pet);
  res.send(pet);
});

// ----- Log entry endpoints (restricted) -----

apiRouter.get('/entries', verifyAuth, (req, res) => {
  res.send(entries.filter((entry) => entry.owner === req.user.email));
});

apiRouter.post('/entries', verifyAuth, (req, res) => {
  const { petId, date, weight, meal, calories } = req.body;
  const pet = pets.find((p) => p.id === petId && p.owner === req.user.email);
  if (!pet) {
    res.status(404).send({ msg: 'Pet not found' });
    return;
  }
  const entry = { id: uuid.v4(), owner: req.user.email, petId, date, weight, meal, calories };
  entries.push(entry);
  res.send(entry);
});

// ----- Breed info from a third-party API (restricted) -----

// Breed list from https://dogapi.dog, loaded once and then cached
let breedCache = null;

async function getBreeds() {
  if (!breedCache) {
    let breeds = [];
    let page = 1;
    let lastPage = 1;
    do {
      const response = await fetch(`https://dogapi.dog/api/v2/breeds?page[number]=${page}`);
      const body = await response.json();
      breeds = breeds.concat(body.data);
      lastPage = body.meta.pagination.last;
      page++;
    } while (page <= lastPage);
    breedCache = breeds;
  }
  return breedCache;
}

apiRouter.get('/breed', verifyAuth, async (req, res, next) => {
  try {
    const name = (req.query.name || '').trim().toLowerCase();
    const breeds = await getBreeds();
    const breed =
      breeds.find((b) => b.attributes.name.toLowerCase() === name) ||
      breeds.find((b) => b.attributes.name.toLowerCase().includes(name));

    if (!name || !breed) {
      res.status(404).send({ msg: `No breed info found for "${req.query.name}"` });
      return;
    }

    const info = breed.attributes;
    const toLbs = (kg) => Math.round(kg * 2.2);
    const minKg = Math.min(info.male_weight.min, info.female_weight.min);
    const maxKg = Math.max(info.male_weight.max, info.female_weight.max);
    res.send({
      name: info.name,
      description: info.description,
      minWeight: toLbs(minKg),
      maxWeight: toLbs(maxKg),
      lifeMin: info.life.min,
      lifeMax: info.life.max,
    });
  } catch (err) {
    next(err);
  }
});

// Default error handler
app.use(function (err, req, res, next) {
  res.status(500).send({ type: err.name, message: err.message });
});

// Send the frontend for any other path so React Router can handle it
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

async function createUser(email, password) {
  const passwordHash = await bcrypt.hash(password, 10);
  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  users.push(user);
  return user;
}

function findUser(field, value) {
  if (!value) return null;
  return users.find((u) => u[field] === value);
}

function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
