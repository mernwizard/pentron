import React from "react";

const Header = () => {
  return (
    <nav className="header">
      <div className="logoContainer">LOGO</div>
      <div className="nav">
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#ourPartners">Our Partners</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#clients">Clients</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
