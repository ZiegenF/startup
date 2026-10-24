import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import { BrowserRouter, NavLink, Navigate, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Dashboard } from './dashboard/dashboard';
import { History } from './history/history';
import { About } from './about/about';
import { logoutAccount } from './petData';

export default function App() {
  // The service keeps the real login in a cookie. localStorage just remembers the name to show.
  const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
  const loggedIn = userName !== '';

  function login(name) {
    localStorage.setItem('userName', name);
    setUserName(name);
  }

  function logout() {
    logoutAccount().catch(() => {});
    localStorage.removeItem('userName');
    setUserName('');
  }

  return (
    <BrowserRouter>
      <header>
        <div className="container header-inner">
          <h1 className="logo">PetVitals 🐾</h1>
          <nav className="site-nav">
            <NavLink to="/" end>Home</NavLink>
            {loggedIn && <NavLink to="/dashboard">Dashboard</NavLink>}
            {loggedIn && <NavLink to="/history">History</NavLink>}
            <NavLink to="/about">About</NavLink>
          </nav>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Login userName={userName} onLogin={login} onLogout={logout} />} />
        <Route path="/dashboard" element={loggedIn ? <Dashboard userName={userName} onLogout={logout} /> : <Navigate to="/" />} />
        <Route path="/history" element={loggedIn ? <History userName={userName} onLogout={logout} /> : <Navigate to="/" />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <footer>
        <p className="mb-1">Ziegen Farley</p>
        <a href="https://github.com/ZiegenF/startup">GitHub</a>
      </footer>
    </BrowserRouter>
  );
}

function NotFound() {
  return (
    <main className="container py-4">
      <section className="pv-card">
        <h2>404: Page not found</h2>
      </section>
    </main>
  );
}
