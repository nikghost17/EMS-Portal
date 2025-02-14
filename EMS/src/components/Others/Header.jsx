import React from "react";

const Header = (props) => {
  const logOut = () => {
    localStorage.setItem("loggedInUser", "");
    props.changeUser("");
  };
  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium text-white">
        Hello
        <br /> <span className="text-3xl font-semibold">hii 👋</span>
      </h1>
      <button
        onClick={logOut}
        className="bg-red-600 text-base font-medium text-white px-5 py-2 rounded-sm"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
