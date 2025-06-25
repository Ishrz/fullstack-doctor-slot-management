
import React, { useState } from "react";
import Flatpickr from "react-flatpickr";
import SlotTable from "../components/SlotTable";
import axios from "axios";

const AdminPage = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [slots, setSlots] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchSlots = async () => {
    if (!startDate || !endDate) {
      alert("Please select start and end date.");
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
        setSlots(response.data);
      } else {
        setSlots([]);
        alert("No slots found.");
      }
    } catch (error) {
      console.error("❌ Error fetching slots:", error);
      alert("Error fetching slots");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h4 className="mb-3">🧠 Admin Dashboard</h4>

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
          <button className="btn btn-primary w-100" onClick={fetchSlots}>
            🔍 Fetch All Slots
          </button>
        </div>
      </div>

      <SlotTable slots={slots} loading={loading} />
    </div>
  );
};

export default AdminPage;
