import React from 'react';

export function About() {
  return (
    <main className="container py-4">
      <section className="pv-card">
        <div className="about-row">
          <img src="/images/pet.jpg" alt="A happy pet" />
          <div className="about-text">
            <h2 className="h3">About PetVitals</h2>
            <p>
              PetVitals helps pet owners keep track of their pet's health. Log weight, meals, and calories each day,
              and watch the trends over time so you can spot changes early.
            </p>
            <h3 className="h5">Features</h3>
            <ul>
              <li>Secure login for each owner</li>
              <li>Daily weight, meal, and calorie logs</li>
              <li>History and weight trend charts</li>
              <li>Breed info with healthy weight ranges</li>
              <li>Live activity from other PetVitals users</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}