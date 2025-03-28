import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); // Light or Dark mode
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode is enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is enabled", "success");
    }
  };

  return (
    <Router basename="/text-utils">
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} aboutText="About" />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          {/* Route for Home (Default Route) */}
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces" mode={mode} />} />
          
          {/* Route for About Page */}
          <Route exact path="/about" element={<About mode={mode} />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
