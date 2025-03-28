import React from 'react';
import { Link } from "react-router-dom"; // React Router Link

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">TextUtils</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.aboutText}</Link>
            </li>
          </ul>
        </div>

        {/* Toggle button for Dark/Light Mode */}
        <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
          <input 
            className="form-check-input" 
            type="checkbox" 
            onChange={props.toggleMode} 
            id="flexSwitchCheckDefault" 
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            {props.mode === 'light' ? 'Enable Dark Mode' : 'Enable Light Mode'}
          </label>
        </div>
      </div>
    </nav>
  );
}
