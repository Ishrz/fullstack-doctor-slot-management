import React, { useState } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_green.css";
import axios from "axios";
import DoctorCard from "../components/DoctorCard";
import SlotList from "../components/SlotList";

const BookingPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [slots, setSlots] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchSlots = async (date) => {
    setLoading(true);
    try {
      const formattedDate = date.toISOString().split("T")[0];

      const response = await axios.post("http://127.0.0.1:8080/api/v1/slot-management", {
        doctorId: 1,
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
      console.error("Failed to fetch slots", error);
      setSlots([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-5">
      <div className="row g-4">
        {/* Left: Doctor Card */}
        <div className="col-md-3">
          <DoctorCard />
        </div>

        {/* Middle: Calendar */}
        <div className="col-md-5">
          <div className="card shadow">
            <div className="card-body">
              <h5>Select a Date</h5>
              <Flatpickr
                className="form-control"
                value={selectedDate}
                onChange={(date) => {
                  setSelectedDate(date[0]);
                  fetchSlots(date[0]);
                }}
                options={{ minDate: "today", dateFormat: "Y-m-d" }}
              />
            </div>
          </div>
        </div>

        {/* Right: Slots */}
        <div className="col-md-4">
          <div className="card shadow">
            <div className="card-body">
              <h5>Available Slots</h5>
             <SlotList
  slots={slots}
  loading={loading}
  selectedDate={selectedDate}
  onBook={(slotId, doctorId) => {
  axios
    .post("http://127.0.0.1:8080/api/v1/slot-management", {
      slotId,
      doctorId,
      action: "BOOK_SLOT"
    })
    .then((response) => {
      let msg;

      //  Handle response that might be plain text OR object
      if (typeof response.data === "string") {
        msg = response.data;
      } else if (response.data.message) {
        msg = response.data.message;
      } else {
        msg = JSON.stringify(response.data, null, 2); // Pretty-print unknown object
      }

      //  Show formatted alert
      alert(msg);

      //  Refresh slots after booking
      fetchSlots(selectedDate);
    })
    .catch((error) => {
      const errMsg =
        error?.response?.data?.message ||
        (typeof error?.response?.data === "string"
          ? error.response.data
          : JSON.stringify(error?.response?.data, null, 2)) ||
        " Booking failed.";

      alert(errMsg);
      console.error("Booking error:", error);
    });
}}
/>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
