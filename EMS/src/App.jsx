import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashBoard from "./components/Dashboard/EmployeeDashBoard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setuser] = useState(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    return loggedInUser ? JSON.parse(loggedInUser).role : null;
  });

  const [loggedInUserData, setLoggedInUserData] = useState(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    return loggedInUser ? JSON.parse(loggedInUser).data : null;
  });

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    console.log(loggedInUser);
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setuser(userData.role);
      setLoggedInUserData(userData.data);
    }
  }, []);

  const authData = useContext(AuthContext);

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setuser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (authData) {
      const employee = authData.employees.find(
        (e) => email == e.email && e.password == password
      );
      if (employee) {
        setuser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );
      }
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? (
        <AdminDashboard changeUser={setuser} />
      ) : user == "employee" ? (
        <EmployeeDashBoard changeUser={setuser} data={loggedInUserData} />
      ) : null}
    </>
  );
};

export default App;
