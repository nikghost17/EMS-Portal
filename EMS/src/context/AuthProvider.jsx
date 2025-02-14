import React, { useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";

export const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [userdata, setUserData] = useState(null);
  useEffect(() => {
    if (!localStorage.getItem("employees") || !localStorage.getItem("admin")) {
      setLocalStorage();
    }
    const { employees, admin } = getLocalStorage();
    setUserData({ employees, admin });
  }, []);
  return (
    <div>
      <AuthContext.Provider value={userdata}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
