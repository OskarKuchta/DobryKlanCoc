import { useState } from "react";
import logo from "../assets/logo.png";

const Navbar: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setIsClicked(!isClicked);
  };

  return (
    <nav className="navbar">
      <div className="navbar__left">
        <img className="navbar__left--photo" src={logo} alt="logo Dobry Klan" />
        <span className="navbar__left--name">DOBRY KLAN</span>
      </div>
      <div className="navbar__right">
        <ul className={`lists ${showMenu ? "show" : ""}`}>
          <li className="nav-element hover">
            <a href="#home">HOME</a>
          </li>
          <li className="nav-element hover">
            <a href="#about">ABOUT</a>
          </li>
          <li className="nav-element hover">
            <a href="#stats">STATS</a>
          </li>
        </ul>
        <div className="hamburger-container">
          <div
            className={`hamburger-menu ${isClicked ? "active" : ""}`}
            onClick={toggleMenu}
          >
            <span className={`first-line ${isClicked ? "first" : ""}`}></span>
            <span className={`second-line ${isClicked ? "second" : ""}`}></span>
            <span className={`third-line ${isClicked ? "third" : ""}`}></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
