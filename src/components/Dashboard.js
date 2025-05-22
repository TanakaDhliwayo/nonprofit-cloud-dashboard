import React, { useState } from "react";
import AnalyticsChart from "./AnalyticsChart";
import StatsOverview from "../components/StatsOverview";
import TanakaPic from "../media/Tanaka.jpg";
import TanieCodes from "../media/TanieCodes.png";
import AIIntegration from "../media/aiTools.png";
import FlowgearIntegrations from "../media/Flowgear.png";
import AzureCloudTools from "../media/azuretool.png";

const Dashboard = () => {
  const [stats, setStats] = useState({
    projects: 12,
    users: 45,
    cloudSpend: 420.5,
  });

  const handleAddProject = (newProjectName) => {
    setStats((prev) => ({
      ...prev,
      projects: prev.projects + 1,
    }));
  };

  return (
    <div>
      <div className="container my-4">
        {/* 🔹 Summary Cards Row */}

        <div className="row mb-4">
          <div className="col-md-9">
            <div className="row mb-4">
              <StatsOverview stats={stats} />
            </div>{" "}
            <div className="row">
              {/* Card 1 */}
              <div className="col-md-4 mb-4">
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    src={AIIntegration}
                    className="card-img-top"
                    alt="AI Integration"
                  />
                  <div className="card-body">
                    <h5 className="card-title">AI Integration</h5>
                    <p className="card-text">
                      Explore AI tools like Microsoft Copilot to boost
                      productivity and automate workflows.
                    </p>
                    <a href="/Integrations" className="btn btn-primary">
                      View Tool
                    </a>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="col-md-4 mb-4">
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    src={FlowgearIntegrations}
                    className="card-img-top"
                    alt="Flowgear"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Flowgear Integrations</h5>
                    <p className="card-text">
                      Connect and automate systems with Flowgear workflows and
                      API logic—no-code/low-code power.
                    </p>
                    <a href="/Integrations" className="btn btn-primary">
                      Explore Flowgear
                    </a>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="col-md-4 mb-4">
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    src={AzureCloudTools}
                    className="card-img-top"
                    alt="Cloud Services"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Azure Cloud Tools </h5>
                    <p className="card-text">
                      Manage Azure services and cloud resources for nonprofit
                      digital transformation initiatives.
                    </p>
                    <a href="/Integrations" className="btn btn-primary">
                      Manage Cloud
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Project Table Section */}
            <div className="mt-5">
              <h4 className="mb-3">Tanie Codes Projects</h4>
              <div className="table-responsive">
                <table className="table table-bordered table-hover">
                  <thead className="table-light">
                    <tr>
                      <th scope="col">Project Name</th>
                      <th scope="col">Status</th>
                      <th scope="col">Tools Used</th>
                      <th scope="col">Start Date</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Intro to Coding Bootcamp</td>
                      <td>
                        <span className="badge bg-success">Ongoing</span>
                      </td>
                      <td>HTML, CSS, JS</td>
                      <td>April 2025</td>
                      <td>
                        <a href="/projects" className="btn btn-sm btn-primary">
                          View
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>Robotics for Kids</td>
                      <td>
                        <span className="badge bg-warning text-dark">
                          Planned
                        </span>
                      </td>
                      <td>Arduino, Scratch</td>
                      <td>June 2025</td>
                      <td>
                        <a href="/projects" className="btn btn-sm btn-primary">
                          View
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>Digital Literacy Program</td>
                      <td>
                        <span className="badge bg-danger">Paused</span>
                      </td>
                      <td>Microsoft 365, Zoom</td>
                      <td>Feb 2025</td>
                      <td>
                        <a href="/projects" className="btn btn-sm btn-primary">
                          View
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* Analytics Section */}
            <div className="mt-5">
              <h4 className="mb-3">Analytics Overview</h4>
              <div className="card">
                <div className="card-body text-center">
                  <h5 className="card-title">Cloud Spend Analysis</h5>
                  <p className="card-text">
                    Monthly cloud spend analysis to optimize resources and
                    costs.
                  </p>
                  <AnalyticsChart />
                </div>
              </div>
            </div>
            {/* Organization Profile Section */}
            <div className="mt-5">
              <h4 className="mb-3">Organization Profile</h4>
              <div className="card" style={{ maxWidth: "600px" }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={TanieCodes}
                      alt="Tanie Codes Org"
                      className="img-fluid "
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Tanie Codes Org</h5>
                      <p className="card-text">
                        Empowering girls in township communities with digital
                        and coding skills for the future.
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          Lead: Tanaka Dhliwayo
                        </small>
                      </p>
                      <a
                        href="/Settings"
                        className="btn btn-outline-primary btn-sm"
                      >
                        Settings
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card mb-4" style={{ maxWidth: "400px" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={TanakaPic}
                    alt="Tanaka Dhliwayo"
                    className="img-fluid "
                    style={{
                      borderRadius: "50%",
                      width: "100px",
                      height: "100px",
                    }}
                  />
                  <a
                    href="#"
                    className="btn btn-outline-primary btn-lg"
                    style={{ marginTop: "10px" }}
                  >
                    Settings
                  </a>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Tanie Codes Org</h5>
                    <p className="card-text">
                      <small className="text-muted">
                        tanaka@taniecodes.org
                      </small>
                      <br />
                      <small className="text-muted">
                        Role: Project Manager
                      </small>
                      <br />
                      <small className="text-muted">Location: Soweto, SA</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Upcoming Tasks */}
            <div className="mt-5">
              <h4 className="mb-3">📅 Upcoming Tasks</h4>
              <div className="card" style={{ maxWidth: "600px" }}>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      Submit Monthly Check-In
                      <span className="badge bg-primary rounded-pill">
                        May 23
                      </span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      Start Flowgear Training
                      <span className="badge bg-secondary rounded-pill">
                        May 27
                      </span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      Add GitHub Links to Portfolio
                      <span className="badge bg-warning text-dark rounded-pill">
                        May 30
                      </span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      Finalize Dashboard UI
                      <span className="badge bg-success rounded-pill">
                        June 1
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-light text-center text-lg-start mt-5 py-3">
        <div className="container text-center">
          <span className="text-muted">
            © {new Date().getFullYear()} Tanie Codes Org | Built by Tanaka
            Dhliwayo |
            <a
              href="https://github.com/TanakaDhliwayo"
              className="ms-2 me-2"
              target="_blank"
            >
              GitHub
            </a>{" "}
            |
            <a
              href="https://www.linkedin.com/in/tanaka-dhliwayo-706599222/"
              target="_blank"
            >
              LinkedIn
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
