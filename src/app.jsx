import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './app.css';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Dashboard } from './dashboard/dashboard';
import { History } from './history/history';
import { About } from './about/about';

export default function App() {
  return (
    <BrowserRouter>
      <header>
        <div className="container header-inner">
          <h1 className="logo">PetVitals 🐾</h1>
          <nav className="site-nav">
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/dashboard">Dashboard</NavLink>
            <NavLink to="/history">History</NavLink>
            <NavLink to="/about">About</NavLink>
          </nav>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Login />} exact />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/history" element={<History />} />
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