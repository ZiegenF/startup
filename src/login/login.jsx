import React from 'react';

export function Login() {
  return (
    <main className="container">
      <section className="hero">
        <h2>Keep your pet healthy, one log at a time</h2>
        <p className="lead">Track your dog or cat's weight, meals, and calories, just like a fitness tracker for your pet.</p>
        <p>
          <a className="github-callout" href="https://github.com/ZiegenF/startup">View the code on GitHub →</a>
        </p>
      </section>

      {/* Authentication placeholder: will connect to the backend later */}
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-5">
          <form className="pv-card" method="get" action="/dashboard">
            <h2 className="h4 mb-3">Login</h2>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input type="text" id="username" className="form-control" placeholder="your@email.com" />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" id="password" className="form-control" placeholder="password" />
            </div>
            <div className="d-flex gap-2">
              <button type="submit" className="btn btn-pv flex-fill">Login</button>
              <button type="submit" className="btn btn-outline-secondary flex-fill">Create account</button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}