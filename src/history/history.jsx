import React from 'react';

export function History() {
  return (
    <main className="container py-4">
      <p className="user-badge">Logged in as: <strong>username</strong></p>

      <section className="pv-card mt-3">
        <h2 className="h4">Bella's History</h2>

        {/* Database data: past log entries saved for this user's pet */}
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
              <tr>
                <td>Sep 20, 2026</td>
                <td>62.4</td>
                <td>1 cup dry food</td>
                <td>380</td>
              </tr>
              <tr>
                <td>Sep 21, 2026</td>
                <td>62.1</td>
                <td>1 cup dry food + treat</td>
                <td>420</td>
              </tr>
              <tr>
                <td>Sep 22, 2026</td>
                <td>61.9</td>
                <td>1 cup dry food</td>
                <td>380</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Placeholder: weight trend chart will be drawn from database data */}
      <section className="pv-card mt-4">
        <h3 className="h5">Weight Trend</h3>
        <div className="chart-placeholder">Chart of weight over time will go here</div>
      </section>
    </main>
  );
}