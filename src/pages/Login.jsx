import React from "react";
import AddAvatar from "../img/addAvatar.png";

const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Sparrow Chat</span>
        <span className="title">Login</span>
        <form>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />

          <button>Sign ip</button>
        </form>
        <p>You don't have an account? Register </p>
      </div>
    </div>
  );
};

export default Login;
