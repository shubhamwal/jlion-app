import React, { useState } from "react";

import "./navbar.css";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <nav className="fixed-top">

        <Link to="/" className="title">
          <h2 style={{ color: "burlywood" }}>
            <span>J</span>
            <span>L</span>ion
          </h2>
        </Link>
        <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={menuOpen ? "open" : ""} style={{ paddingRight: "34px" }}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/services">Services</NavLink>
          </li>
          <li>
            <NavLink to="/aboutus">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>

      </nav>
    </div>
  );
};