import React from "react";
import { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    console.log("submitted");
    setEmail("");
    setPassword("");
  };
  return (
    <>
      <div className="flex h-screen w-screen items-center justify-center">
        <div className="border-2 border-emerald-200 rounded-xl">
          <form
            onSubmit={(e) => submitHandler(e)}
            className="flex flex-col items-center justify-center m-4 "
          >
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="text-black outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-3 rounded-full placeholder:text-gray-500"
              type="email"
              placeholder="Enter your email"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="text-black outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-3 mt-3 rounded-full placeholder:text-gray-500"
              type="password"
              placeholder="Enter your password"
            />
            <button className="mt-7 text-white border-none outline-none hover:bg-emerald-700 font-semibold bg-emerald-600 text-lg py-2 px-8 w-full rounded-full placeholder:text-white">
              Log in
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
