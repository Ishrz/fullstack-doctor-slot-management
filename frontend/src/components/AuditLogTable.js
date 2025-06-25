// File: src/components/AuditLogTable.js
import React from "react";

const AuditLogTable = ({ logs }) => {
  if (!logs || logs.length === 0) {
    return <p>No logs available.</p>;
  }

  return (
    <div className="table-responsive">
      <table className="table table-striped">
        <thead className="table-dark">
          <tr>
            <th>Slot ID</th>
            <th>Doctor ID</th>
            <th>Action</th>
            <th>Message</th>
            <th>Performed By</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log, index) => (
            <tr key={index}>
              <td>{log.slotId}</td>
              <td>{log.doctorId}</td>
              <td>{log.action}</td>
              <td>{log.message}</td>
              <td>{log.performedBy}</td>
              <td>{log.timestamp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AuditLogTable;
