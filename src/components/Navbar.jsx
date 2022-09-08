import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Sparrow Chat</span>
      <div className="user">
        <img
          src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <span>John Doe</span>
        <button>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
