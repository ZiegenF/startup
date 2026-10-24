# petVital

[My Notes](notes.md)

This app or say webiste will deliver a unique aspect to those who want great health and tracking for their pets!

> [!NOTE]
> This is a template for your startup application. You must modify this `README.md` file for each phase of your development. You only need to fill in the section for each deliverable when that deliverable is submitted in Canvas. Without completing the section for a deliverable, the TA will not know what to look for when grading your submission. Feel free to add additional information to each deliverable description, but make sure you at least have the list of rubric items and a description of what you did for each item.

> [!NOTE]
> If you are not familiar with Markdown then you should review the [documentation](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) before continuing.

### Elevator pitch

Just like humans track steps, calories, and weight to stay healthy, our pets deserve the same care, but most owners are guessing. **PetVitals** is a simple app for tracking the health of everyday pets (dogs and cats), log daily weight, meals, calories, and activity, get feeding reminders, and watch trends over time with easy-to-read charts. Whether you're managing a picky eater, a pet on a diet, or just want peace of mind that Whiskers is thriving, PetVitals turns guesswork into simple, visual data, right from your phone or browser.

### Design

<img width="477" height="822" alt="petVitalspreview" src="https://github.com/user-attachments/assets/31560ed2-f42b-4298-8cd5-f2c9a9f1ceec" />

### Key features

- User registration, login, and logout, with each user managing their own pets
- Add one or more pets (name, species, breed, age, target weight)
- Log daily weight entries per pet, with a trend chart over time
- Log meals/feedings with calorie counts, building a daily calorie total
- Pull breed-specific info (e.g. typical weight range, temperament) from a public dog/cat breed API
- Real-time feed showing when other users on the app log a weight entry or feeding, so you can see recent activity across the community
- Simple dashboard summarizing today's calories, latest weight, and trend vs. target

### Technologies

I am going to use the required technologies in the following ways.

**HTML**
Semantic structure for the core views: login/register page, pet dashboard, add/edit pet form, and weight/calorie log entry forms.

**CSS**
Clean, card-based layout with a calming, pet-friendly color palette; responsive design so it works on both phone and desktop; simple chart styling for weight/calorie trend lines.

**React**
Single-page application built from components: `LoginForm`, `PetList`, `PetDashboard`, `WeightLogForm`, `MealLogForm`, `ActivityFeed`. React routing switches between login, dashboard, and individual pet detail views, and re-renders the dashboard reactively as new log entries are added.

**Service (backend endpoints)**
- `POST /auth/register`, `POST /auth/login`, `POST /auth/logout` — secure user authentication
- `GET/POST /pets` — create and retrieve a user's pets
- `POST /pets/:id/weight` and `GET /pets/:id/weight` — log and retrieve weight history
- `POST /pets/:id/meals` and `GET /pets/:id/meals` — log and retrieve feeding/calorie history
- `GET /breed-info?species=dog&breed=labrador` — proxy call to a third-party breed info API (e.g. [TheDogAPI](https://thedogapi.com/) or [TheCatAPI](https://thecatapi.com/)) to fetch breed characteristics and a reference photo

**Database**
Stores user credentials (securely hashed), pets, weight log entries, and meal/calorie log entries, all linked by user and pet ID so each owner only sees their own animals' data.

**WebSocket**
Broadcasts a lightweight, anonymized activity event (e.g. "A user just logged a weight entry for their dog") to all connected clients whenever any user adds a weight or meal log, powering the real-time activity feed on the dashboard.

## 🚀 Specification Deliverable

> [!NOTE]
> Fill in this sections as the submission artifact for this deliverable. You can refer to this [example](https://github.com/webprogramming260/startup-example/blob/main/README.md) for inspiration.

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] I completed the prerequisites for this deliverable (Git commit requirement)
- [x] Proper use of Markdown
- [x] A concise and compelling elevator pitch
- [x] Description of key features
- [x] Description of how you will use each technology including your 3rd party API and use of WebSocket
- [x] One or more rough sketches of your application. Images must be embedded in this file using Markdown image references.

## 🚀 AWS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Rented EC2 server**
- [x] **Leased domain name**
- [x] **Server accessible** from my domain: [https://ziegencs260.click](https://ziegencs260.click)

## 🚀 HTML deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] I completed the prerequisites for this deliverable (Simon deployed, GitHub link, Git commits) Simon is deployed to simon.ziegencs260.click, the home page links to my GitHub repo, and I committed my work in small steps.
- [x] **HTML pages** - Four pages: index.html (home and login), dashboard.html (pick a pet and log entries), history.html (past log entries), and about.html (what PetVitals is).
- [x] **Proper HTML element usage** - Every page uses body, header, nav, main, and footer. I also used h1-h3 headings, section, form, label, input, select, button, table (with thead and tbody), ul/li lists, and img.
- [x] **Links** - A nav bar on every page links to Home, Dashboard, History, and About. The footer on every page links to my GitHub repo. The login form takes the user to the dashboard.
- [x] **Text** - The home page describes PetVitals as a fitness tracker for your pet. The About page explains the app and lists its main features.
- [x] **3rd party API placeholder** - The Breed Info section on the dashboard shows a healthy weight range for the selected pet's breed. This will come from a public dog/cat breed API.
- [x] **Images** - The About page shows a pet photo from images/pet.jpg
- [x] **Login placeholder** - index.html has a login form with username and password fields and Login and Create account buttons. The dashboard and history pages show "Logged in as: username" where the real username will appear.
- [x] **DB data placeholder** - The table on history.html shows past weight, meal, and calorie entries. These will be stored in and loaded from the database. The weight trend chart placeholder will also use this data.
- [x] **WebSocket placeholder** - The Live Activity list on the dashboard shows entries other users log in real time, like "A user just logged a meal for their cat." These will be pushed through WebSocket.

## 🚀 CSS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] I completed the prerequisites for this deliverable (Simon deployed, GitHub link, Git commits) - Simon is deployed to simon.ziegencs260.click, the home page has a "View the code on GitHub" link near the top plus one in the footer of every page, and I committed my work in small steps.
- [x] **Visually appealing colors and layout. No overflowing elements.** - The app uses a teal and green theme with a light blue page background. Content sits in white rounded cards with soft shadows. The layout fits on every screen size: images shrink to fit, and the history table scrolls sideways on small screens instead of overflowing.
- [x] **Use of a CSS framework** - I linked Bootstrap 5.3.3 from its CDN on every page. I used its container and row/column grid, form classes (form-control, form-select, form-label), buttons (btn, btn-outline-secondary), the table and table-responsive classes, and spacing utilities like mb-3 and py-4.
- [x] **All visual elements styled using CSS** - Every part of the app is styled in styles.css: the header and nav bar, the logged-in user badge, the cards, the login and log entry forms, the buttons, the breed info box, the Live Activity list, the history table, the chart placeholder, the pet image, and the footer. I removed the old HTML styling attributes (border on the table and width on the image) and moved that styling into CSS.
- [x] **Responsive to window resizing using flexbox and/or grid display** - The header and nav use flexbox and wrap onto new lines on narrow screens. The About page uses flexbox so the image and text sit side by side on wide screens and stack on small ones. The dashboard uses CSS grid with two columns (the forms and Live Activity) that collapse to one column below 768px with a media query.
- [x] **Use of an imported font** - I imported Nunito from Google Fonts and applied it to the whole app in the body selector.
- [x] **Use of different types of selectors including element, class, ID, and pseudo selectors** - Element selectors: body, main, h1, img, header, footer. Class selectors: .pv-card, .site-nav, .btn-pv, .dashboard-grid, .chart-placeholder. ID selector: #live-activity, which gives the WebSocket box an accent border. Pseudo selectors: a:hover for the nav links and buttons, tr:nth-child(even) for striped table rows, and li:last-child to remove the last divider in the Live Activity list.

## 🚀 React part 1: Routing deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] I completed the prerequisites for this deliverable (Simon deployed, GitHub link, Git commits) - Simon React is deployed to simon.ziegencs260.click, the home page has a "View the code on GitHub" link, and I committed my work in small steps.
- [x] **Bundled using Vite** - I installed Vite and added `npm run dev`, `npm run build`, and `npm run preview` scripts in package.json. The app is bundled into the `dist` folder and deployed with `deployReact.sh`.
- [x] **Components** - Each page is its own React component: `src/login/login.jsx` (home and login), `src/dashboard/dashboard.jsx`, `src/history/history.jsx`, and `src/about/about.jsx`. The header and footer live in `src/app.jsx`. All the HTML was converted to JSX (class to className, for to htmlFor), the styles moved to `src/app.css`, and Bootstrap is imported from npm.
- [x] **Router** - `react-router-dom` routes `/`, `/dashboard`, `/history`, and `/about`. The nav bar uses `NavLink`, which highlights the active page. Unknown paths show a 404 component.

## 🚀 React part 2: Reactivity deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] I completed the prerequisites for this deliverable (Simon deployed, GitHub link, Git commits) - Simon React is deployed to simon.ziegencs260.click, the home page has a "View the code on GitHub" link, and I committed my work in small steps.
- [x] **All functionality implemented or mocked out** - Everything works on the frontend now. The parts that will need the backend are mocked out:
  - **Login** - You can create an account and log in with a username and password. Accounts are stored in localStorage for now. Once you log in, the Dashboard and History links show up in the nav, and the header badge shows your username. The home page shows a Logout button when you are logged in. If you go to /dashboard or /history without logging in, it sends you back to the home page.
  - **Database (mocked with localStorage)** - Pets and log entries are saved in localStorage under each user's name, so each user only sees their own pets. The helper functions are in `src/petData.js` so they will be easy to swap for service calls later.
  - **Add a pet** - The "+ Add a Pet" pop-up uses a React Bootstrap Modal. Saving it adds the pet to the dropdown and selects it.
  - **Log entries** - The Log Today form saves a weight, meal, and calories for the selected pet. The dashboard shows today's calorie total and the latest weight.
  - **History** - The history table shows the selected pet's real entries, and you can switch pets with a dropdown. The weight trend chart is an SVG line chart drawn from the logged weights.
  - **3rd party API (mocked)** - Breed info is loaded by `fetchBreedInfo`, which returns a promise after a short delay like a real API call. It shows "Loading breed info..." first and then the result.
  - **WebSocket (mocked)** - The Live Activity list gets a new fake message from another user every 5 seconds with `setInterval`. Your own saved entries also show up in the list.
- [x] **Hooks** - I used `useState` for the logged-in user, form inputs, pets, entries, the modal, and the activity list. I used `useEffect` to save pets and entries to localStorage when they change, to load breed info when the selected pet changes, and to start and clean up the activity interval. I also used `useNavigate` from React Router to go to the dashboard after login.

## 🚀 Service deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] I completed the prerequisites for this deliverable (Simon deployed, GitHub link, Git commits) - The home page has a "View the code on GitHub" link, and I committed my work in small steps.
- [x] **Node.js/Express HTTP service** - The backend is in `service/index.js`. It uses Express 5 and listens on port 4000. On my server it runs with pm2, and Caddy forwards startup.ziegencs260.click to it. It is deployed with `deployService.sh`.
- [x] **Static middleware for frontend** - `app.use(express.static('public'))` serves the built React app. Any path that isn't an API call gets `index.html`, so React Router still works when you refresh a page like /dashboard.
- [x] **Calls to third party endpoints** - `GET /api/breed?name=...` calls [Dog API](https://dogapi.dog) to get a breed's description, weight range, and life span. The service loads the breed list once and keeps it cached. The dashboard shows this info for the selected pet.
- [x] **Backend service endpoints** - `POST /api/auth/create`, `POST /api/auth/login`, `DELETE /api/auth/logout`, `GET/POST /api/pets`, `GET/POST /api/entries`, and `GET /api/breed`. For now the data is stored in memory, and it will move to MongoDB in the DB deliverable.
- [x] **Frontend calls service endpoints** - `src/petData.js` has the `fetch` calls. Login and create account call the auth endpoints, the dashboard loads and saves pets and log entries, and the history page loads entries from the service. In development, `vite.config.js` proxies `/api` to port 4000.
- [x] **Supports registration, login, logout, and restricted endpoint** - Creating an account or logging in sets an httpOnly auth cookie with a random token. The pets, entries, and breed endpoints use a `verifyAuth` middleware that returns 401 if you aren't logged in. If the frontend gets a 401, it logs you out and sends you back to the login page. Logout deletes the token on the server and clears the cookie.
- [x] **Uses BCrypt to hash passwords** - Passwords are hashed with `bcryptjs` before they're stored, and login checks them with `bcrypt.compare`. The plain password is never saved.

## 🚀 DB deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] I completed the prerequisites for this deliverable (Simon deployed, GitHub link, Git commits)
- [ ] **Stores data in MongoDB** - I did not complete this part of the deliverable.
- [ ] **Stores credentials in MongoDB** - I did not complete this part of the deliverable.

## 🚀 WebSocket deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] I completed the prerequisites for this deliverable (Simon deployed, GitHub link, Git commits)
- [ ] **Backend listens for WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Frontend makes WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Data sent over WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **WebSocket data displayed** - I did not complete this part of the deliverable.
- [ ] **Application is fully functional** - I did not complete this part of the deliverable.