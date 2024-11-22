import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">
        Home
      </Link>
      <Link to="/new-player" className="nav-link">
        Add New Player
      </Link>
    </nav>
  );
};

export default NavBar;
