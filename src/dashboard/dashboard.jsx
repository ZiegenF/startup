import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { loadPets, addPet, loadEntries, addEntry, fetchBreedInfo, breedNames } from '../petData';

const emptyPet = { name: '', species: 'Dog', breed: '', birthday: '', weight: '' };

export function Dashboard({ userName, onLogout }) {
  const [pets, setPets] = React.useState([]);
  const [entries, setEntries] = React.useState([]);
  const [petId, setPetId] = React.useState('');
  const [breedText, setBreedText] = React.useState('');
  const [error, setError] = React.useState('');

  const [weight, setWeight] = React.useState('');
  const [meal, setMeal] = React.useState('');
  const [calories, setCalories] = React.useState('');
  const [saved, setSaved] = React.useState('');

  const [showAddPet, setShowAddPet] = React.useState(false);
  const [newPet, setNewPet] = React.useState(emptyPet);

  const [activity, setActivity] = React.useState([]);

  const pet = pets.find((p) => p.id === petId);

  // If the service says we are not logged in, go back to the login page
  function handleError(err) {
    if (err.status === 401) {
      onLogout();
    } else {
      setError(err.message);
    }
  }

  // Load this user's pets and entries from the service
  React.useEffect(() => {
    Promise.all([loadPets(), loadEntries()])
      .then(([pets, entries]) => {
        setPets(pets);
        setEntries(entries);
        setPetId(pets[0]?.id || '');
      })
      .catch(handleError);
  }, []);

  // Look up breed info when the selected pet changes. The service gets it from dogapi.dog.
  React.useEffect(() => {
    if (!pet || !pet.breed) {
      setBreedText(pet ? 'No breed entered for this pet.' : '');
      return;
    }
    let active = true;
    setBreedText('Loading breed info...');
    fetchBreedInfo(pet.breed).then((info) => {
      if (active) setBreedText(info);
    });
    return () => {
      active = false;
    };
  }, [pet?.id, pet?.breed]);

  // Mock WebSocket: other users' activity shows up every few seconds
  React.useEffect(() => {
    const animals = ['🐕 dog', '🐈 cat', '🐇 rabbit', '🐦 bird'];
    const actions = ['a weight entry', 'a meal', 'their calories'];
    const names = ['Sam', 'Ana', 'Jordan', 'Lee', 'Kai'];

    const interval = setInterval(() => {
      const who = names[Math.floor(Math.random() * names.length)];
      const what = actions[Math.floor(Math.random() * actions.length)];
      const animal = animals[Math.floor(Math.random() * animals.length)];
      addActivity(`${who} just logged ${what} for their ${animal}`);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  function addActivity(message) {
    setActivity((prev) => [{ id: Date.now() + Math.random(), message }, ...prev].slice(0, 6));
  }

  async function saveEntry(e) {
    e.preventDefault();
    try {
      const entry = await addEntry({
        petId: pet.id,
        date: new Date().toLocaleDateString(),
        weight,
        meal,
        calories,
      });
      setEntries([...entries, entry]);
      setWeight('');
      setMeal('');
      setCalories('');
      setSaved(`Saved entry for ${pet.name}!`);
      addActivity(`You logged an entry for ${pet.name}`);
    } catch (err) {
      handleError(err);
    }
  }

  async function savePet(e) {
    e.preventDefault();
    try {
      const pet = await addPet(newPet);
      setPets([...pets, pet]);
      setPetId(pet.id);
      setNewPet(emptyPet);
      setShowAddPet(false);
    } catch (err) {
      handleError(err);
    }
  }

  function updateNewPet(field, value) {
    setNewPet({ ...newPet, [field]: value });
  }

  // Today's summary for the selected pet
  const today = new Date().toLocaleDateString();
  const petEntries = entries.filter((entry) => entry.petId === petId);
  const todayCalories = petEntries
    .filter((entry) => entry.date === today)
    .reduce((sum, entry) => sum + Number(entry.calories || 0), 0);
  const latestWeight = [...petEntries].reverse().find((entry) => entry.weight)?.weight || pet?.weight;

  return (
    <main className="container py-4">
      <p className="user-badge">Logged in as: <strong>{userName}</strong></p>
      {error && <p className="text-danger">{error}</p>}

      <div className="dashboard-grid mt-3">
        {/* Left column */}
        <div className="d-flex flex-column gap-4">
          <section className="pv-card">
            <h2 className="h4">Your Pet</h2>
            <label htmlFor="pet" className="form-label">Choose a pet</label>
            <div className="d-flex gap-2 mb-3">
              <select id="pet" className="form-select" value={petId} onChange={(e) => setPetId(e.target.value)}>
                {pets.length === 0 && <option value="">No pets yet</option>}
                {pets.map((p) => (
                  <option key={p.id} value={p.id}>{p.name} ({p.species})</option>
                ))}
              </select>
              <button type="button" className="btn btn-pv text-nowrap" onClick={() => setShowAddPet(true)}>
                + Add a Pet
              </button>
            </div>

            {pet ? (
              <>
                <p className="mb-2">
                  Today: <strong>{todayCalories}</strong> calories · Latest weight: <strong>{latestWeight || '—'}</strong> lbs
                </p>
                <h3 className="h5">Breed Info</h3>
                <p className="breed-info mb-0">{breedText}</p>
              </>
            ) : (
              <p className="mb-0">Add your first pet to start logging.</p>
            )}
          </section>

          <section className="pv-card">
            <h2 className="h4">Log Today</h2>
            <form onSubmit={saveEntry}>
              <div className="row g-3">
                <div className="col-12 col-sm-4">
                  <label htmlFor="weight" className="form-label">Weight (lbs)</label>
                  <input type="number" id="weight" className="form-control" step="0.1" value={weight}
                    onChange={(e) => { setWeight(e.target.value); setSaved(''); }} />
                </div>
                <div className="col-12 col-sm-4">
                  <label htmlFor="meal" className="form-label">Meal</label>
                  <input type="text" id="meal" className="form-control" placeholder="1 cup dry food" value={meal}
                    onChange={(e) => { setMeal(e.target.value); setSaved(''); }} />
                </div>
                <div className="col-12 col-sm-4">
                  <label htmlFor="calories" className="form-label">Calories</label>
                  <input type="number" id="calories" className="form-control" value={calories}
                    onChange={(e) => { setCalories(e.target.value); setSaved(''); }} />
                </div>
              </div>
              <button type="submit" className="btn btn-pv mt-3" disabled={!pet || (!weight && !meal && !calories)}>
                Save Entry
              </button>
              {saved && <span className="ms-3 text-success">{saved}</span>}
            </form>
          </section>
        </div>

        {/* Right column: live updates from other users */}
        <section id="live-activity" className="pv-card">
          <h2 className="h4">Live Activity</h2>
          <ul className="list-unstyled mb-0">
            {activity.length === 0 && <li>Waiting for activity...</li>}
            {activity.map((item) => (
              <li key={item.id}>{item.message}</li>
            ))}
          </ul>
        </section>
      </div>

      {/* Add a Pet pop-up */}
      <Modal show={showAddPet} onHide={() => setShowAddPet(false)} centered>
        <form onSubmit={savePet}>
          <Modal.Header closeButton>
            <Modal.Title as="h2" className="h5">Add a New Pet</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <div className="mb-3">
              <label htmlFor="petName" className="form-label">Pet name</label>
              <input type="text" id="petName" className="form-control" placeholder="Bella" required
                value={newPet.name} onChange={(e) => updateNewPet('name', e.target.value)} />
            </div>

            <div className="mb-3">
              <label htmlFor="species" className="form-label">Type of animal</label>
              <select id="species" className="form-select" value={newPet.species}
                onChange={(e) => updateNewPet('species', e.target.value)}>
                <option>Dog</option>
                <option>Cat</option>
                <option>Rabbit</option>
                <option>Bird</option>
                <option>Reptile</option>
                <option>Other / Exotic</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="breed" className="form-label">Breed</label>
              <input type="text" id="breed" className="form-control" list="breedList" placeholder="Start typing a breed..."
                value={newPet.breed} onChange={(e) => updateNewPet('breed', e.target.value)} />
              <datalist id="breedList">
                {breedNames.map((b) => <option key={b} value={b}></option>)}
              </datalist>
            </div>

            <div className="row g-3">
              <div className="col-6">
                <label htmlFor="birthday" className="form-label">Birthday</label>
                <input type="date" id="birthday" className="form-control"
                  value={newPet.birthday} onChange={(e) => updateNewPet('birthday', e.target.value)} />
              </div>
              <div className="col-6">
                <label htmlFor="startWeight" className="form-label">Current weight (lbs)</label>
                <input type="number" id="startWeight" className="form-control" step="0.1"
                  value={newPet.weight} onChange={(e) => updateNewPet('weight', e.target.value)} />
              </div>
            </div>
          </Modal.Body>

          <Modal.Footer>
            <button type="button" className="btn btn-outline-secondary" onClick={() => setShowAddPet(false)}>Cancel</button>
            <button type="submit" className="btn btn-pv">Save Pet</button>
          </Modal.Footer>
        </form>
      </Modal>
    </main>
  );
}
