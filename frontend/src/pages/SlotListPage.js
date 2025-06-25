import React, { useState } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_green.css";
import SlotTable from "../components/SlotTable";
import axios from "axios";

const SlotListPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [slots, setSlots] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchSlots = async (date) => {
    setLoading(true);
    try {
      const formattedDate = date.toISOString().split("T")[0];
      const response = await axios.post("http://127.0.0.1:8080/api/v1/slot-management", {
        doctorId: 1, // can replace with dynamic later
        startDate: formattedDate,
        endDate: formattedDate,
        action: "GET_SLOTS"
      });

      if (Array.isArray(response.data)) {
        setSlots(response.data);
      } else {
        setSlots([]);
      }
    } catch (error) {
      console.error("Error fetching slots:", error);
      setSlots([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-4">
      <div className="mb-4">
        <h4>📋 View Slot List</h4>
        <Flatpickr
          className="form-control w-50"
          value={selectedDate}
          options={{ minDate: "today", dateFormat: "Y-m-d" }}
          onChange={(date) => {
            setSelectedDate(date[0]);
            fetchSlots(date[0]);
          }}
        />
      </div>

      <SlotTable slots={slots} loading={loading} />
    </div>
  );
};

export default SlotListPage;
