import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/index.css";
import logo from "../assets/logo_large.png";

export default function NavbarComponent() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  // Function to close the menu
  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = "auto"; // Enable scrolling when the menu is closed
  };

  // Function to open the menu
  const openMenu = () => {
    setMenuOpen(true);
    document.body.style.overflow = "hidden"; // Disable scrolling when the menu is open
  };

  return (
    <nav>
      <div className="nav_container">
        <div
          className="menu"
          onClick={() => (isMenuOpen ? closeMenu() : openMenu())}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <Link to="/">
          <img
            onClick={closeMenu}
            className="logo"
            src={logo}
            alt="Århus Burnouts logo stor udgave"
          />
        </Link>
        <ul className={isMenuOpen ? "open" : ""}>
          <li>
            <NavLink to="/OmKoerestolsrugby" onClick={closeMenu}>
              Om Kørestolsrugby
            </NavLink>
          </li>
          <li>
            <NavLink to="/OmBurnouts" onClick={closeMenu}>
              Om Århus Burnouts
            </NavLink>
          </li>
          <li>
            <NavLink to="/Nyheder" onClick={closeMenu}>
              Nyheder
            </NavLink>
          </li>
          <li>
            <NavLink to="/Kalender" onClick={closeMenu}>
              Kalender
            </NavLink>
          </li>
          <li>
            <NavLink to="/Kontakt" onClick={closeMenu}>
              Kontakt os
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
