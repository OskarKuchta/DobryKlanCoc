import { useState } from "react";
import logo from "../assets/logo.png";

const Navbar: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  interface Functions {
    (): void;
  }
  type hoverType = {
    backgroundColor: string;
  };
  const handleHover: Functions = () => {
    setIsHovered(true);
  };
  const handleMouseLeave: Functions = () => {
    setIsHovered(false);
  };
  const hoverStyles: hoverType = {
    backgroundColor: isHovered ? "#216ECC" : "rgb(235, 218, 218)",
  };
  const toggleMenu: Functions = () => {
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
          <li className="navbar__right--element hover">
            <a href="#home">HOME</a>
          </li>
          <li className="navbar__right--element hover">
            <a href="#about">ABOUT</a>
          </li>
          <li className="navbar__right--element hover">
            <a href="#stats">STATS</a>
          </li>
        </ul>
        <div className="navbar__right--hamburger-container">
          <div
            className={`navbar__right--hamburger-menu ${
              isClicked ? "active" : ""
            }`}
            onClick={toggleMenu}
          >
            <span
              className={`first-line ${isClicked ? "first" : ""}`}
              style={hoverStyles}
              onMouseEnter={handleHover}
              onMouseLeave={handleMouseLeave}
            ></span>
            <span
              style={hoverStyles}
              onMouseEnter={handleHover}
              onMouseLeave={handleMouseLeave}
              className={`second-line ${isClicked ? "second" : ""}`}
            ></span>
            <span
              style={hoverStyles}
              onMouseEnter={handleHover}
              onMouseLeave={handleMouseLeave}
              className={`third-line ${isClicked ? "third" : ""}`}
            ></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
