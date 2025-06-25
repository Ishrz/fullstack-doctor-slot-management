
import React from "react";

const SlotTable = ({ slots, loading, role }) => {
  if (loading) {
    return <p>Loading...</p>;
  }

  if (!slots || slots.length === 0) {
    return <p>No slots found for selected date.</p>;
  }

  return (
    <div className="table-responsive">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h5 className="mb-0">Slot Table</h5>
        {role === "admin" && <span className="badge bg-secondary">Admin Panel</span>}
      </div>
      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Status</th>
            <th>Type</th>
            <th>Location</th>
            <th>Access</th>
          </tr>
        </thead>
        <tbody>
          {slots.map((slot) => (
            <tr key={slot.id}>
              <td>{slot.id}</td>
              <td>{slot.slotDate}</td>
              <td>{slot.startTime}</td>
              <td>{slot.endTime}</td>
              <td><span className={`badge bg-${getStatusColor(slot.slotStatus)}`}>{slot.slotStatus}</span></td>
              <td>{slot.slotType}</td>
              <td>{slot.location}</td>
              <td>{slot.accessType}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const getStatusColor = (status) => {
  switch (status) {
    case "AVAILABLE": return "success";
    case "BOOKED": return "danger";
    case "BLOCKED": return "secondary";
    case "PENDING": return "warning";
    default: return "info";
  }
};

export default SlotTable;
