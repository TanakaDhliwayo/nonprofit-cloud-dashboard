import React, { useState } from "react";

const Integrations = () => {
  const [copilotConnected, setCopilotConnected] = useState(false);
  const [flowgearConnected, setFlowgearConnected] = useState(false);
  const [azureConnected, setAzureConnected] = useState(false);

  const renderStatus = (isConnected) => (
    <span className={`badge ${isConnected ? "bg-success" : "bg-secondary"}`}>
      {isConnected ? "Connected" : "Disconnected"}
    </span>
  );

  return (
    <div className="container my-4">
      <h2 className="mb-4">🔌 Tool Integrations</h2>
      <div className="row">
        {/* Copilot */}
        <div className="col-md-4 mb-4">
          <div className="card shadow">
            <img
              src="https://via.placeholder.com/286x180"
              className="card-img-top"
              alt="Copilot"
            />
            <div className="card-body">
              <h5 className="card-title">
                Microsoft Copilot {renderStatus(copilotConnected)}
              </h5>
              <p className="card-text">
                Boost productivity with AI assistance in emails, documents, and
                workflows.
              </p>
              <button
                className={`btn ${
                  copilotConnected ? "btn-danger" : "btn-outline-primary"
                }`}
                onClick={() => setCopilotConnected(!copilotConnected)}
              >
                {copilotConnected ? "Disconnect" : "Connect"}
              </button>
            </div>
          </div>
        </div>

        {/* Flowgear */}
        <div className="col-md-4 mb-4">
          <div className="card shadow">
            <img
              src="https://via.placeholder.com/286x180"
              className="card-img-top"
              alt="Flowgear"
            />
            <div className="card-body">
              <h5 className="card-title">
                Flowgear Automation {renderStatus(flowgearConnected)}
              </h5>
              <p className="card-text">
                Automate tasks between apps with no-code/low-code workflows.
              </p>
              <button
                className={`btn ${
                  flowgearConnected ? "btn-danger" : "btn-outline-primary"
                }`}
                onClick={() => setFlowgearConnected(!flowgearConnected)}
              >
                {flowgearConnected ? "Disconnect" : "Connect"}
              </button>
            </div>
          </div>
        </div>

        {/* Azure */}
        <div className="col-md-4 mb-4">
          <div className="card shadow">
            <img
              src="https://via.placeholder.com/286x180"
              className="card-img-top"
              alt="Azure"
            />
            <div className="card-body">
              <h5 className="card-title">
                Azure Cloud {renderStatus(azureConnected)}
              </h5>
              <p className="card-text">
                Manage virtual machines, file storage, and cloud tools securely.
              </p>
              <button
                className={`btn ${
                  azureConnected ? "btn-danger" : "btn-outline-primary"
                }`}
                onClick={() => setAzureConnected(!azureConnected)}
              >
                {azureConnected ? "Disconnect" : "Connect"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Integrations;
