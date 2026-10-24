import React from 'react';
import { loadPets, loadEntries } from '../petData';

export function History({ userName }) {
  const [pets] = React.useState(() => loadPets(userName));
  const [entries] = React.useState(() => loadEntries(userName));
  const [petId, setPetId] = React.useState(pets[0]?.id || '');

  const pet = pets.find((p) => p.id === petId);
  const petEntries = entries.filter((entry) => entry.petId === petId);
  const weights = petEntries.filter((entry) => entry.weight).map((entry) => Number(entry.weight));

  return (
    <main className="container py-4">
      <p className="user-badge">Logged in as: <strong>{userName}</strong></p>

      <section className="pv-card mt-3">
        <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-3">
          <h2 className="h4 mb-0">{pet ? `${pet.name}'s History` : 'History'}</h2>
          {pets.length > 0 && (
            <select className="form-select w-auto" value={petId} onChange={(e) => setPetId(e.target.value)}>
              {pets.map((p) => (
                <option key={p.id} value={p.id}>{p.name}</option>
              ))}
            </select>
          )}
        </div>

        <div className="table-responsive">
          <table className="table align-middle mb-0">
            <thead>
              <tr>
                <th>Date</th>
                <th>Weight (lbs)</th>
                <th>Meal</th>
                <th>Calories</th>
              </tr>
            </thead>
            <tbody>
              {petEntries.length === 0 && (
                <tr>
                  <td colSpan="4">No entries yet. Log one on the Dashboard!</td>
                </tr>
              )}
              {petEntries.map((entry) => (
                <tr key={entry.id}>
                  <td>{entry.date}</td>
                  <td>{entry.weight || '—'}</td>
                  <td>{entry.meal || '—'}</td>
                  <td>{entry.calories || '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="pv-card mt-4">
        <h3 className="h5">Weight Trend</h3>
        {weights.length < 2 ? (
          <div className="chart-placeholder">Log at least two weights to see a trend</div>
        ) : (
          <WeightChart weights={weights} />
        )}
      </section>
    </main>
  );
}

function WeightChart({ weights }) {
  const width = 600;
  const height = 180;
  const pad = 20;
  const min = Math.min(...weights);
  const max = Math.max(...weights);
  const range = max - min || 1;

  const points = weights.map((w, i) => {
    const x = pad + (i / (weights.length - 1)) * (width - pad * 2);
    const y = height - pad - ((w - min) / range) * (height - pad * 2);
    return { x, y, w };
  });

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="weight-chart">
      <polyline points={points.map((p) => `${p.x},${p.y}`).join(' ')} />
      {points.map((p, i) => (
        <g key={i}>
          <circle cx={p.x} cy={p.y} r="4" />
          <text x={p.x} y={p.y - 8} textAnchor="middle">{p.w}</text>
        </g>
      ))}
    </svg>
  );
}
