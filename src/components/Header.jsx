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
            <a href="#about">Services</a>
          </li>
          <li>
            <a href="#about">Our Approach & Partners</a>
          </li>
          <li>
            <a href="#about">Projects</a>
          </li>
          <li>
            <a href="#about">Clients</a>
          </li>
          <li>
            <a href="#about">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
