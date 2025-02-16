import "./App.css"; //can be changed
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
<<<<<<< HEAD
// import About from "./components/About";
import React, { useState } from "react";

// import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // React Router v6
=======
import About from "./components/About";
import React, { useState } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // React Router v6
>>>>>>> a83e908 (Initial commit)


function App() {
  const [mode, setMode] = useState('light');
  const toggleMode =()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode is enabled", "success")
      document.title = 'TextUtils- Dark Mode'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is enabled", "success")
      document.title = 'TextUtils- Light Mode'
    }
  }
  const[alert, setAlert] = useState(null);
  
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    }, 1500)
  }
  return (
<<<<<<< HEAD
    // <Router>
    //   <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} aboutText="About"/>
    //   <Alert alert={alert} />
    //   <div className="container my-3">
    //     <Routes>
    //       <Route exact path="/about" element={<About />} />
    //       <Route eaxct path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} />
    //     </Routes>
    //   </div>
    // </Router>
    <>
    {/* WITHOUT ROUNTING */}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} aboutText="About"/>
    <Alert alert={alert} />
    <div className="container my-3">
    <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
    </div>
    </>
=======
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} aboutText="About"/>
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route eaxct path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} />
        </Routes>
      </div>
    </Router>
>>>>>>> a83e908 (Initial commit)
  );
}

export default App;
