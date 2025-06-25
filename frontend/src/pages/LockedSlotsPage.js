import React, { useState } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_green.css";
import axios from "axios";

const LockedSlotsPage = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [slots, setSlots] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchLockedSlots = async (date) => {
    setLoading(true);
    setSlots([]);
    setError("");
    try {
      const formattedDate = date.toISOString().split("T")[0];
      const res = await axios.post("http://127.0.0.1:8080/api/v1/slot-management", {
        doctorId: 1,
        startDate: formattedDate,
        action: "GET_SLOTS"
      });

      const locked = res.data.filter(slot => slot.slotStatus === "LOCKED");
      if (locked.length === 0) {
        setError("⚠️ No locked slots found for selected date.");
      } else {
        setSlots(locked);
      }
    } catch (err) {
      console.error("Error fetching locked slots:", err);
      setError("❌ Failed to fetch locked slots.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-5">
      <h3 className="mb-4">🔒 Locked Slots</h3>
      <Flatpickr
        className="form-control mb-3"
        value={selectedDate}
        onChange={(date) => {
          setSelectedDate(date[0]);
          fetchLockedSlots(date[0]);
        }}
        options={{ minDate: "today", dateFormat: "Y-m-d" }}
        placeholder="Pick a date"
      />

      {loading && <p>Loading...</p>}
      {error && <div className="alert alert-warning">{error}</div>}

      {slots.length > 0 && (
        <table className="table table-bordered">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Date</th>
              <th>Time</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {slots.map((slot) => (
              <tr key={slot.id}>
                <td>{slot.id}</td>
                <td>{slot.slotDate}</td>
                <td>{slot.startTime} - {slot.endTime}</td>
                <td>{slot.slotStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default LockedSlotsPage;