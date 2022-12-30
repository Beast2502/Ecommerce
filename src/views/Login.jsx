import React from "react";
import './Login.css'

const LogIn = () => {
  return (
    <>
      <div className="login-input-wrapper">
        <input className="login-input" placeholder="Name" />
        <input className="login-input" placeholder="Password" />
        <button className="login-button">Login</button>

      </div>
    </>
  );
};

export default LogIn;
