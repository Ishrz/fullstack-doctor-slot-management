import React from "react";

const SlotList = ({ slots, onBook }) => {
  if (!slots || slots.length === 0) {
    return <div className="alert alert-warning">No available slots.</div>;
  }

  return (
    <div className="d-flex flex-wrap gap-2">
      {slots.map((slot) => (
        <button
          key={slot.id}
          className="btn btn-outline-primary"
          onClick={() => onBook(slot.id, slot.doctorId)}
        >
          {slot.startTime} - {slot.endTime}
        </button>
      ))}
    </div>
  );
};

export default SlotList;
