import React, { useState } from "react";
import "./Header.css";
import Icon1 from "../assets/icon1.png";
import Icon2 from "../assets/icon2.png";
import Icon3 from "../assets/icon3.png";
import Icon4 from "../assets/icon4.png";

const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <header className="header-container">
      <h1 className="title">TIL</h1>
      <div
        className={`rectangle ${isExpanded ? "expanded" : ""}`}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        <div className="sidebar">
          <img src={Icon1} alt="Ícone 1" className="sidebar-icon" />
          <img src={Icon2} alt="Ícone 2" className="sidebar-icon" />
          <img src={Icon3} alt="Ícone 3" className="sidebar-icon" />
          <img src={Icon4} alt="Ícone 4" className="sidebar-icon" />
        </div>
      </div>
    </header>
  );
};

export default Header;
