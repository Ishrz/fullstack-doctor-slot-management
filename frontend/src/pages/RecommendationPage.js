import React, { useState } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_green.css";
import axios from "axios";

const RecommendationPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchRecommendation = async (date) => {
    setLoading(true);
    setResult(null);
    try {
      const formattedDate = date.toISOString().split("T")[0];

      const res = await axios.post("http://127.0.0.1:8080/api/v1/slot-management", {
        doctorId: 1,
        startDate: formattedDate,
        action: "RECOMMEND_SLOT"
      });

      setResult(res.data);
    } catch (err) {
      console.error("❌ Error fetching recommendation:", err);
      setResult("❌ Failed to fetch recommendation.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-5">
      <h3 className="mb-4">Smart Slot Recommendation</h3>

      <div className="card shadow mb-4">
        <div className="card-body">
          <label htmlFor="recommendDate" className="form-label">
            Select a date
          </label>
          <Flatpickr
            id="recommendDate"
            className="form-control"
            value={selectedDate}
            onChange={(date) => {
              setSelectedDate(date[0]);
              fetchRecommendation(date[0]);
            }}
            options={{ minDate: "today", dateFormat: "Y-m-d" }}
          />
        </div>
      </div>

      {loading && <p>🔄 Fetching recommended slot...</p>}

      {result && (
        typeof result === "string" ? (
          <div className="alert alert-warning">{result}</div>
        ) : (
          <div className="alert alert-success">
            <h5>✅ Recommended Slot</h5>
            <p><strong>Date:</strong> {result.slotDate}</p>
            <p><strong>Time:</strong> {result.startTime} to {result.endTime}</p>
            <p><strong>Location:</strong> {result.location}</p>
            <p><strong>Type:</strong> {result.slotType}</p>
            <p><strong>Status:</strong> {result.slotStatus}</p>
            <p><strong>Access Type:</strong> {result.accessType}</p>
          </div>
        )
      )}
    </div>
  );
};

export default RecommendationPage;
