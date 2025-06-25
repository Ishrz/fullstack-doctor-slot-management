import { createContext } from "react";

const UserRoleContext = createContext({
  role: "User",
  setRole: () => {},
});

export default UserRoleContext;