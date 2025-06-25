import React, { useState } from "react";
import Flatpickr from "react-flatpickr";
import axios from "axios";

const DashboardPage = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchSummary = async () => {
    if (!startDate || !endDate) {
      alert("Please select date range.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post("http://127.0.0.1:8080/api/v1/slot-management", {
        doctorId: 1,
        startDate,
        endDate,
        action: "GET_SLOTS"
      });

      if (Array.isArray(response.data)) {
        const total = response.data.length;
        const available = response.data.filter(s => s.slotStatus === "AVAILABLE").length;
        const booked = response.data.filter(s => s.slotStatus === "BOOKED").length;
        const pending = response.data.filter(s => s.slotStatus === "PENDING").length;
        const blocked = response.data.filter(s => s.slotStatus === "BLOCKED").length;
        const utilization = total === 0 ? 0 : Math.round((booked / total) * 100);

        setStats({ total, available, booked, pending, blocked, utilization });
      } else {
        setStats(null);
        alert("No slot data found.");
      }
    } catch (err) {
      console.error(" Error fetching stats:", err);
      alert("Error loading dashboard.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h4 className="mb-3">📊 Dashboard Summary</h4>

      <div className="row g-3 mb-4">
        <div className="col-md-4">
          <label>Start Date</label>
          <Flatpickr
            className="form-control"
            options={{ dateFormat: "Y-m-d" }}
            onChange={(date) => setStartDate(date[0]?.toISOString().split("T")[0])}
          />
        </div>
        <div className="col-md-4">
          <label>End Date</label>
          <Flatpickr
            className="form-control"
            options={{ dateFormat: "Y-m-d" }}
            onChange={(date) => setEndDate(date[0]?.toISOString().split("T")[0])}
          />
        </div>
        <div className="col-md-4 d-flex align-items-end">
          <button className="btn btn-primary w-100" onClick={fetchSummary}>
            📈 Show Stats
          </button>
        </div>
      </div>

      {loading && <p>Loading data...</p>}

      {stats && (
        <div className="row g-3">
          <SummaryCard label="Total Slots" value={stats.total} color="secondary" />
          <SummaryCard label="Available" value={stats.available} color="success" />
          <SummaryCard label="Booked" value={stats.booked} color="danger" />
          <SummaryCard label="Pending" value={stats.pending} color="warning" />
          <SummaryCard label="Blocked" value={stats.blocked} color="dark" />
          <SummaryCard label="Utilization" value={`${stats.utilization}%`} color="info" />
        </div>
      )}
    </div>
  );
};

const SummaryCard = ({ label, value, color }) => (
  <div className="col-md-4">
    <div className={`card text-white bg-${color} shadow`}>
      <div className="card-body">
        <h6 className="card-title">{label}</h6>
        <h3 className="card-text">{value}</h3>
      </div>
    </div>
  </div>
);

export default DashboardPage;