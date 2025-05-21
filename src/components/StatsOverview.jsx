import React from "react";

const StatsOverview = ({ stats }) => {
  return (
    <div className="row mb-4">
      <div className="col-md-4">
        <div className="card text-white bg-primary mb-3">
          <div className="card-body">
            <h5 className="card-title">Total Projects</h5>
            <p className="card-text">{stats.projects}</p>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card text-white bg-success mb-3">
          <div className="card-body">
            <h5 className="card-title">Active Users</h5>
            <p className="card-text">{stats.users}</p>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card text-white bg-warning mb-3">
          <div className="card-body">
            <h5 className="card-title">Cloud Spend</h5>
            <p className="card-text">R{stats.cloudSpend.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsOverview;
