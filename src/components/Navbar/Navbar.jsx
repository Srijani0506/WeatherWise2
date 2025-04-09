import React from "react";
import "./NavBar.css";
import logo from "../../assets/logo.png";

const NavBar = () => {
  return (
    <nav className="nav-section">
      <div className="nav-logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="nav-links">
        <li>
          <ion-icon name="home-outline"></ion-icon>
          <span>Home</span>
        </li>
        <li>
          <ion-icon name="newspaper-outline"></ion-icon>
          <span>Blogs</span>
        </li>
        <li>
          <ion-icon name="locate-outline"></ion-icon>
          <span>Map</span>
        </li>
        <li>
          <ion-icon name="camera-outline"></ion-icon>
          <span>Photos</span>
        </li>
        <li>
          <ion-icon name="videocam-outline"></ion-icon>
          <span>Videos</span>
        </li>
        <li>
          <ion-icon name="call-outline"></ion-icon>
          <span>Contact</span>
        </li>
      </ul>
      <ul className="nav-logout">
        <li>
          <ion-icon name="log-out-outline"></ion-icon>
          <span>Log out</span>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
