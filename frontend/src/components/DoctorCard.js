import React from "react";

const DoctorCard = () => {
  return (
    <div className="card shadow text-center">
      <div className="card-body">
        <img
          src="/doctor.png" // ✅ Uses public folder
          alt="Doctor"
          className="img-fluid rounded mb-3"
          width="100"
        />
        <h5>Dr. Mehta</h5>
        <p className="text-muted mb-1">Consultation: 30 min</p>
        <p className="text-muted mb-1">Setup a 1:1 meeting with Vikas Mehta Founder and CEO of Agenty</p>
        <span className="badge bg-success">Google Meet</span>
      </div>
    </div>
  );
};

export default DoctorCard;
