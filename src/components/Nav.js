import React, { useState } from "react";
import logo from "../image/ logo .svg";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () =>{
      setMenuOpen(!menuOpen);
  }
  return (
    <nav className={'navbar ${menuOpen ? "open" : ""}'}>
      <a href="/">
        <img src={logo} alt="logo" />
    </a>
  {/* navbar M */}
  <div>
    <div className="menu-icon" onClick={togglemenu}></div>
    <div className="bar"></div>
    <div className="bar"></div>
     <div className="bar"></div>
  </div>
{/* navbar items */}

<ul className={'nav-links ${menuOpen ? "visible" : ""}'}>
  <li>
  <a href="/">Home</a>
  </li>
 <li>
  <a href="/">About us</a>
  </li>
 <li>
  <a href="/">Services</a>
  </li>
 <li>
  <a href="/">Menu</a>
  </li>
 <li>
  <a href="/">Reservations</a>
  </li>
 <li>
  <a href="/">Order</a>
  </li>
 <li>
  <a href="/">login</a>
  </li>
  </ul>
