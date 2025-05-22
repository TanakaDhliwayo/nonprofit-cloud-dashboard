import React from "react";

const AppNavbar = () => {
  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    window.location.href = "/login";
  };

  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary bg-light"
      style={{ position: "sticky", top: 0, zIndex: 1000 }}
    >
      <div className="container-fluid">
        <a
          className="navbar-brand"
          href="/Dashboard"
          target="_blank"
          rel="noopener noreferrer"
        >
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
                className="nav-link"
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Dashboard
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="/projects"
                target="_blank"
                rel="noopener noreferrer"
              >
                Projects
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href="/Integrations"
                target="_blank"
                rel="noopener noreferrer"
              >
                Integrations
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href="/Settings"
                target="_blank"
                rel="noopener noreferrer"
              >
                Settings
              </a>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-outline-danger "
                onClick={handleLogout}
              >
                Log Out
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AppNavbar;
