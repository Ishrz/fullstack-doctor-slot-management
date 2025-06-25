
import React, { useState, useEffect } from "react";
import SlotDeleteForm from "../components/SlotDeleteForm";
import AuditLogTable from "../components/AuditLogTable";
import axios from "axios";

const AdminControlsPage = () => {
  const [logs, setLogs] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8080/api/v1/audit-logs")
      .then(res => setLogs(res.data))
      .catch(err => console.error("Failed to load logs", err));
  }, [refresh]);

  return (
    <div className="container py-5">
      <h3>🧠 Admin Controls</h3>

      <SlotDeleteForm onSuccess={() => setRefresh(!refresh)} />

      <hr />

      <h5>📋 Audit Logs</h5>
      <AuditLogTable logs={logs} />
    </div>
  );
};

export default AdminControlsPage;
