import React from "react";
import Dashboard from "./Dashboard";

const AppNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          🌍 Nonprofit Dashboard
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="/dashboard"
              >
                Dashboard
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Integrations">
                Itergrations
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Reports">
                Reports
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Settings">
                Settings
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AppNavbar;
