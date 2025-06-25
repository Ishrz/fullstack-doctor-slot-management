import React, { useContext } from "react";
import UserRoleContext from "../contexts/UserRoleContext";

const RoleSwitcher = () => {
  const { role, setRole } = useContext(UserRoleContext);

  return (
    <div className="mb-3 text-end">
      <strong>Role:</strong>{" "}
      <select value={role} onChange={(e) => setRole(e.target.value)} className="form-select d-inline w-auto">
        <option value="customer">User</option>
        <option value="admin">Admin/Doctor</option>
      </select>
    </div>
  );
};

export default RoleSwitcher;
