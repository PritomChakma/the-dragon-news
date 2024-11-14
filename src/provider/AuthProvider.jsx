import { createContext, useState } from "react";

export const AuthContex = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "Pritom Chakma",
  });

  const AuthInfo = {
    user,
    setUser,
  };

  return <AuthContex.Provider value={AuthInfo}>{children}</AuthContex.Provider>;
};

export default AuthProvider;
