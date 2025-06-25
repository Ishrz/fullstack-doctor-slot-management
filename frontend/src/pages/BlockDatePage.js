import React, { useState } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_green.css";
import axios from "axios";

const BlockDatePage = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [message, setMessage] = useState("");

  const handleBlockAction = async (actionType) => {
    try {
      const response = await axios.post("http://127.0.0.1:8080/api/v1/slot-management", {
        doctorId: 1,
        startDate: startDate.toISOString().split("T")[0],
        endDate: endDate.toISOString().split("T")[0],
        action: actionType,
      });

      setMessage(response.data);
    } catch (error) {
      const err = error?.response?.data || "❌ Failed to perform action.";
      setMessage(typeof err === "string" ? err : JSON.stringify(err));
      console.error(err);
    }
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4">🚫 Block / ✅ Unblock Date</h2>

      <div className="row g-3">
        <div className="col-md-4">
          <label className="form-label">Start Date</label>
          <Flatpickr
            className="form-control"
            value={startDate}
            options={{ minDate: "today", dateFormat: "Y-m-d" }}
            onChange={(date) => setStartDate(date[0])}
          />
        </div>

        <div className="col-md-4">
          <label className="form-label">End Date</label>
          <Flatpickr
            className="form-control"
            value={endDate}
            options={{ minDate: "today", dateFormat: "Y-m-d" }}
            onChange={(date) => setEndDate(date[0])}
          />
        </div>

        <div className="col-md-4 d-flex align-items-end gap-2">
          <button className="btn btn-danger w-50" onClick={() => handleBlockAction("BLOCK_DATE")}>
            Block
          </button>
          <button className="btn btn-success w-50" onClick={() => handleBlockAction("UNBLOCK_DATE")}>
            Unblock
          </button>
        </div>
      </div>

      {message && (
        <div className="alert alert-info mt-4" role="alert">
          {typeof message === "string" ? message : message.message}
        </div>
      )}
    </div>
  );
};

export default BlockDatePage;
