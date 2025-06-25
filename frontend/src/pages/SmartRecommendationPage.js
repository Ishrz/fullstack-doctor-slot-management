import React, { useState } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_green.css";
import axios from "axios";

const RecommendationPage = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchRecommendation = async (date) => {
    setLoading(true);
    setResult(null);
    setError("");

    try {
      const formattedDate = date.toISOString().split("T")[0];

      const res = await axios.post("http://127.0.0.1:8080/api/v1/slot-management", {
        doctorId: 1,
        startDate: formattedDate,
        action: "RECOMMEND_SLOT"
      });

      if (
        !res.data ||
        res.data.slotDate === null || //  Backend returns object with null values
        res.data.startTime === null
      ) {
        setError("⚠️ No recommended slot found for selected date.");
      } else {
        setResult(res.data);
      }
    } catch (err) {
      console.error("❌ Error fetching recommendation:", err);
      setError("❌ Failed to fetch recommendation.");
    } finally {
      setLoading(false);
    }
  };

  const handleDateChange = (dateArray) => {
    if (dateArray && dateArray[0]) {
      const pickedDate = dateArray[0];
      setSelectedDate(pickedDate);
      fetchRecommendation(pickedDate);
    }
  };

  return (
    <div className="container py-5">
      <h3 className="mb-4">🧠 Smart Slot Recommendation</h3>

      <div className="card shadow mb-4">
        <div className="card-body">
          <label htmlFor="recommendDate" className="form-label">
            📅 Select a date to get a recommended slot:
          </label>
          <Flatpickr
            id="recommendDate"
            className="form-control"
            value={selectedDate}
            onChange={handleDateChange}
            options={{ minDate: "today", dateFormat: "Y-m-d" }}
            placeholder="Pick a date"
          />
        </div>
      </div>

      {loading && <p>🔄 Fetching recommended slot...</p>}

      {error && <div className="alert alert-warning mt-3">{error}</div>}

      {result && !error && result.slotDate !== null && result.startTime !== null && (
        <div className="alert alert-success mt-3">
          <h5>✅ Recommended Slot</h5>
          <p><strong>Date:</strong> {result.slotDate}</p>
          <p><strong>Time:</strong> {result.startTime} to {result.endTime}</p>
          <p><strong>Location:</strong> {result.location}</p>
          <p><strong>Type:</strong> {result.slotType}</p>
          <p><strong>Status:</strong> {result.slotStatus}</p>
          <p><strong>Access Type:</strong> {result.accessType}</p>
        </div>
      )}
    </div>
  );
};

export default RecommendationPage;
