import React from 'react';
import { useNavigate } from 'react-router-dom';
import { createAccount, loginAccount } from '../petData';

export function Login({ userName, onLogin, onLogout }) {
  const [name, setName] = React.useState(userName);
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const navigate = useNavigate();

  // The service checks the password and sets an auth cookie
  async function loginUser(e) {
    e.preventDefault();
    try {
      await loginAccount(name, password);
      onLogin(name);
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    }
  }

  async function createUser() {
    try {
      await createAccount(name, password);
      onLogin(name);
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    }
  }

  function logoutUser() {
    onLogout();
    setName('');
    setPassword('');
  }

  return (
    <main className="container">
      <section className="hero">
        <h2>Keep your pet healthy, one log at a time</h2>
        <p className="lead">Track your dog or cat's weight, meals, and calories, just like a fitness tracker for your pet.</p>
        <p>
          <a className="github-callout" href="https://github.com/ZiegenF/startup">View the code on GitHub →</a>
        </p>
      </section>

      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-5">
          {userName ? (
            <section className="pv-card text-center">
              <h2 className="h4 mb-3">Welcome back, {userName}!</h2>
              <div className="d-flex gap-2">
                <button type="button" className="btn btn-pv flex-fill" onClick={() => navigate('/dashboard')}>
                  Go to Dashboard
                </button>
                <button type="button" className="btn btn-outline-secondary flex-fill" onClick={logoutUser}>
                  Logout
                </button>
              </div>
            </section>
          ) : (
            <form className="pv-card" onSubmit={loginUser}>
              <h2 className="h4 mb-3">Login</h2>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input
                  type="text"
                  id="username"
                  className="form-control"
                  placeholder="your@email.com"
                  value={name}
                  onChange={(e) => { setName(e.target.value); setError(''); }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  placeholder="password"
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); setError(''); }}
                />
              </div>
              {error && <p className="text-danger">{error}</p>}
              <div className="d-flex gap-2">
                <button type="submit" className="btn btn-pv flex-fill" disabled={!name || !password}>Login</button>
                <button type="button" className="btn btn-outline-secondary flex-fill" disabled={!name || !password} onClick={createUser}>
                  Create account
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
