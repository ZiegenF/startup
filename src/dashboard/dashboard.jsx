import React from 'react';

export function Dashboard() {
  return (
    <main className="container py-4">
      {/* Shows the logged-in user's name (authentication) */}
      <p className="user-badge">Logged in as: <strong>username</strong></p>

      <div className="dashboard-grid mt-3">
        {/* Left column */}
        <div className="d-flex flex-column gap-4">
          <section className="pv-card">
            <h2 className="h4">Your Pet</h2>
            <label htmlFor="pet" className="form-label">Choose a pet</label>
            <div className="d-flex gap-2 mb-3">
              <select id="pet" className="form-select">
                <option>Bella (Dog)</option>
                <option>Whiskers (Cat)</option>
              </select>
              <button type="button" className="btn btn-pv text-nowrap" data-bs-toggle="modal" data-bs-target="#addPetModal">
                + Add a Pet
              </button>
            </div>

            {/* Third-party API placeholder: breed info from a public breed API */}
            <h3 className="h5">Breed Info</h3>
            <p className="breed-info mb-0">Labrador Retriever: typical weight 55–80 lbs (from breed API)</p>
          </section>

          {/* Application data: log a new entry */}
          <section className="pv-card">
            <h2 className="h4">Log Today</h2>
            <form>
              <div className="row g-3">
                <div className="col-12 col-sm-4">
                  <label htmlFor="weight" className="form-label">Weight (lbs)</label>
                  <input type="number" id="weight" className="form-control" />
                </div>
                <div className="col-12 col-sm-4">
                  <label htmlFor="meal" className="form-label">Meal</label>
                  <input type="text" id="meal" className="form-control" placeholder="1 cup dry food" />
                </div>
                <div className="col-12 col-sm-4">
                  <label htmlFor="calories" className="form-label">Calories</label>
                  <input type="number" id="calories" className="form-control" />
                </div>
              </div>
              <button type="submit" className="btn btn-pv mt-3">Save Entry</button>
            </form>
          </section>
        </div>

        {/* Right column: WebSocket placeholder, live updates from other users */}
        <section id="live-activity" className="pv-card">
          <h2 className="h4">Live Activity</h2>
          <ul className="list-unstyled mb-0">
            <li>🐕 A user just logged a weight entry for their dog</li>
            <li>🐈 A user just logged a meal for their cat</li>
          </ul>
        </section>
      </div>

      {/* Add a Pet pop-up */}
      <div className="modal fade" id="addPetModal" tabIndex="-1" aria-labelledby="addPetTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <form>
              <div className="modal-header">
                <h2 className="modal-title h5" id="addPetTitle">Add a New Pet</h2>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>

              <div className="modal-body">
                <div className="mb-3">
                  <label htmlFor="petName" className="form-label">Pet name</label>
                  <input type="text" id="petName" className="form-control" placeholder="Bella" required />
                </div>

                <div className="mb-3">
                  <label htmlFor="species" className="form-label">Type of animal</label>
                  <select id="species" className="form-select">
                    <option>Dog</option>
                    <option>Cat</option>
                    <option>Rabbit</option>
                    <option>Bird</option>
                    <option>Reptile</option>
                    <option>Other / Exotic</option>
                  </select>
                </div>

                {/* Third-party API placeholder: breed list and ideal weight will come from a breed API */}
                <div className="mb-3">
                  <label htmlFor="breed" className="form-label">Breed</label>
                  <input type="text" id="breed" className="form-control" list="breedList" placeholder="Start typing a breed..." />
                  <datalist id="breedList">
                    <option value="Labrador Retriever"></option>
                    <option value="German Shepherd"></option>
                    <option value="Siamese"></option>
                    <option value="Holland Lop"></option>
                  </datalist>
                  <div className="form-text">Ideal weight range will load from the breed database.</div>
                </div>

                <div className="row g-3">
                  <div className="col-6">
                    <label htmlFor="birthday" className="form-label">Birthday</label>
                    <input type="date" id="birthday" className="form-control" />
                  </div>
                  <div className="col-6">
                    <label htmlFor="startWeight" className="form-label">Current weight (lbs)</label>
                    <input type="number" id="startWeight" className="form-control" step="0.1" />
                  </div>
                </div>
              </div>

              <div className="modal-footer">
                <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Cancel</button>
                <button type="submit" className="btn btn-pv">Save Pet</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}