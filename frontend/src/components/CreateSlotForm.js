import React, { useState } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_green.css";
import axios from "axios";

const CreateSlotForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [slotDuration, setSlotDuration] = useState(30);
  const [slotType, setSlotType] = useState("CONSULTATION");
  const [location, setLocation] = useState("");
  const [notes, setNotes] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const payload = {
        action: "CREATE_SLOTS",
        doctorId: 1,
        startDate: startDate.toISOString().split("T")[0],
        endDate: endDate.toISOString().split("T")[0],
        slotDuration: parseInt(slotDuration),
        slotType,
        location,
        notes
      };

      const response = await axios.post("http://127.0.0.1:8080/api/v1/slot-management", payload);

      let msg;
      if (typeof response.data === "string") msg = response.data;
      else if (response.data.message) msg = response.data.message;
      else msg = JSON.stringify(response.data);

      alert(msg);
    } catch (error) {
      console.error("Error creating slots", error);
      alert(
        error?.response?.data?.message ||
        error?.response?.data ||
        "Failed to create slots"
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="card shadow p-4">
      <h4 className="mb-4">Create Doctor Slots</h4>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Start Date</label>
          <Flatpickr
            className="form-control"
            value={startDate}
            onChange={(date) => setStartDate(date[0])}
            options={{ dateFormat: "Y-m-d", minDate: "today" }}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">End Date</label>
          <Flatpickr
            className="form-control"
            value={endDate}
            onChange={(date) => setEndDate(date[0])}
            options={{ dateFormat: "Y-m-d", minDate: startDate }}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Slot Duration (minutes)</label>
          <input
            type="number"
            className="form-control"
            value={slotDuration}
            onChange={(e) => setSlotDuration(e.target.value)}
            min={5}
            step={5}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Slot Type</label>
          <select
            className="form-select"
            value={slotType}
            onChange={(e) => setSlotType(e.target.value)}
          >
            <option value="CONSULTATION">CONSULTATION</option>
            <option value="WALKIN">WALK-IN</option>
            <option value="EMERGENCY">EMERGENCY</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Location</label>
          <input
            type="text"
            className="form-control"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Clinic A, Google Meet, etc."
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Notes (optional)</label>
          <textarea
            className="form-control"
            rows={2}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Any notes for these slots"
          ></textarea>
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          disabled={submitting}
        >
          {submitting ? "Creating..." : "Create Slots"}
        </button>
      </form>
    </div>
  );
};

export default CreateSlotForm;
