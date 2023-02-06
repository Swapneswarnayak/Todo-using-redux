import React from "react";
import { Link } from "react-router-dom";
import "./All.css";
const Navbar = () => {
  return (
    <div id="nav">
      <Link to="/">Home</Link>
      <Link to="/todo">Todo</Link>
    </div>
  );
};

export default Navbar;
