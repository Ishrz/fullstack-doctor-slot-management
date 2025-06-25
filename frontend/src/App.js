import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";

import BookingPage from "./pages/BookingPage";
import CreateSlotPage from "./pages/CreateSlotPage";
import SlotListPage from "./pages/SlotListPage";
import LockedSlotsPage from "./pages/LockedSlotsPage";
import RecommendationPage from "./pages/RecommendationPage";
import SmartRecommendationPage from "./pages/SmartRecommendationPage";
import AdminControlsPage from "./pages/AdminControlsPage";
import AdminPage from "./pages/AdminPage";
import DashboardPage from "./pages/DashboardPage";
import BlockDatePage from "./pages/BlockDatePage";


import RoleSwitcher from "./components/RoleSwitcher";
import UserRoleContext from "./contexts/UserRoleContext";

function App() {
  const [role, setRole] = useState("User"); // default role

  return (
    <UserRoleContext.Provider value={{ role, setRole }}>
      <Router>
        <div className="container py-4">
          <RoleSwitcher />

          {/* Navigation Tabs */}
          <nav className="mb-4">
            <ul className="nav nav-pills">
              <li className="nav-item">
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
                >
                  📅 Booking
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/slot-list"
                  className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
                >
                  📋 Slot List
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/locked"
                  className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
                >
                  🔒 Locked Slots
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/smart-recommend"
                  className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
                >
                  🧠 Smart Recommendation
                </NavLink>
              </li>

              {role === "admin" && (
                <>
                  <li className="nav-item">
                    <NavLink
                      to="/create-slot"
                      className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
                    >
                      ➕ Create Slot
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/admin-controls"
                      className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
                    >
                      ⚙️ Admin Controls
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/admin"
                      className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
                    >
                      🏠 Admin Dashboard
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/dashboard"
                      className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
                    >
                      📊 Dashboard
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                       to="/admin/block-date"
                       className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
                        >
                    🚫 Block Dates
                        </NavLink>
                  </li>

                </>
              )}
            </ul>
          </nav>

          {/* Page Routing */}
          <Routes>
            <Route path="/" element={<BookingPage />} />
            <Route path="/create-slot" element={<CreateSlotPage />} />
            <Route path="/slot-list" element={<SlotListPage />} />
            <Route path="/locked" element={<LockedSlotsPage />} />
            <Route path="/recommend" element={<RecommendationPage />} />
            <Route path="/smart-recommend" element={<SmartRecommendationPage />} />
            <Route path="/admin-controls" element={<AdminControlsPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/admin/block-date" element={<BlockDatePage />} />

          </Routes>
        </div>
      </Router>
    </UserRoleContext.Provider>
  );
}

export default App;