import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import Integrations from "./components/Integrations";
import Login from "./components/Login";
//import Settings from "./components/Settings";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/integrations" element={<Integrations />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
