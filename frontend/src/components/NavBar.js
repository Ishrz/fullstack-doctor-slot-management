// File: src/components/NavBar.js
import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary rounded px-3">
      <div className="container-fluid">
        <NavLink className="navbar-brand fw-bold" to="/">
          🩺 Doctor Slot System
        </NavLink>
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
              <NavLink to="/" end className="nav-link">
                📅 Booking
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/create-slot" className="nav-link">
                ➕ Create Slot
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/slot-list" className="nav-link">
                📋 Slot List
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/locked" className="nav-link">
                🔒 Locked Slots
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/smart-recommend" className="nav-link">
                🧠 Smart Recommend
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/admin-controls" className="nav-link">
                ⚙️ Admin Controls
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/dashboard" className="nav-link">
                📊 Dashboard
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
