
import React, { useState } from "react";
import axios from "axios";

const SlotDeleteForm = ({ onSuccess }) => {
  const [slotId, setSlotId] = useState("");

  const handleDelete = () => {
    if (!slotId) return alert("Please enter slot ID");

    axios.delete(`http://localhost:8080/api/v1/slot/${slotId}`)
      .then(() => {
        alert("Slot deleted");
        setSlotId("");
        onSuccess?.();
      })
      .catch(err => {
        alert("Failed to delete slot");
        console.error(err);
      });
  };

  return (
    <div className="card shadow mb-3">
      <div className="card-body">
        <h5>🗑️ Delete Slot</h5>
        <div className="input-group">
          <input
            type="number"
            className="form-control"
            value={slotId}
            onChange={(e) => setSlotId(e.target.value)}
            placeholder="Enter Slot ID"
          />
          <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default SlotDeleteForm;
