import React from "react";
import "./Navbar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">Dart</div>
      <ul className="navbar__links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
