import React, { useState, useEffect } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({ name: "", status: "" });
  const [filter, setFilter] = useState("All");

  // useEffect(() => {
  // const stored = localStorage.getItem("projects");
  //if (stored) setProjects(JSON.parse(stored));
  //}, []);

  //useEffect(() => {
  //localStorage.setItem("projects", JSON.stringify(projects));
  //}, [projects]);

  const handleAdd = () => {
    if (newProject.name && newProject.status) {
      setProjects([...projects, newProject]);
      setNewProject({ name: "", status: "" });
    }
  };

  const handleDelete = (index) => {
    const updated = projects.filter((_, i) => i !== index);
    setProjects(updated);
  };

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.status === filter);

  return (
    <div className="container my-4">
      <h2>Projects</h2>

      <div className="mb-3 row">
        <div className="col-md-3">
          <input
            type="text"
            placeholder="Project name"
            value={newProject.name}
            onChange={(e) =>
              setNewProject({ ...newProject, name: e.target.value })
            }
            className="form-control"
          />
        </div>
        <div className="col-md-3">
          <select
            className="form-select"
            value={newProject.status}
            onChange={(e) =>
              setNewProject({ ...newProject, status: e.target.value })
            }
          >
            <option value="">Select Status</option>
            <option value="Completed">Completed</option>
            <option value="In Progress">In Progress</option>
            <option value="Pending">Pending</option>
          </select>
        </div>
        <div className="col-md-2">
          <button className="btn btn-primary" onClick={handleAdd}>
            Add Project
          </button>
        </div>
        <div className="col-md-4 text-end">
          <select
            className="form-select"
            onChange={(e) => setFilter(e.target.value)}
            value={filter}
          >
            <option value="All">Show All</option>
            <option value="Completed">Completed</option>
            <option value="In Progress">In Progress</option>
            <option value="Pending">Pending</option>
          </select>
        </div>
      </div>

      <table className="table table-bordered">
        <thead className="table-light">
          <tr>
            <th>Project Name</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredProjects.map((proj, i) => (
            <tr key={i}>
              <td>{proj.name}</td>
              <td>
                <span
                  className={`badge bg-${
                    proj.status === "Completed"
                      ? "success"
                      : proj.status === "In Progress"
                      ? "info"
                      : "secondary"
                  }`}
                >
                  {proj.status}
                </span>
              </td>
              <td>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handleDelete(i)}
                >
                  Delete
                </button>
                {/* You can add an Edit button here later */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Projects;
