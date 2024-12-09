import React, { useState } from "react";
import "./Header.css";
import Icon1 from "../assets/icon1.png";
import Icon2 from "../assets/icon2.png";
import Icon3 from "../assets/icon3.png";
import Icon4 from "../assets/icon4.png";
import MobileIconMsg from "../assets/msg.png"; // Ícone de mensagem
import MobileIconConfig from "../assets/config.png"; // Ícone de configuração

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
          <div className="sidebar-item">
            <img src={Icon1} alt="Ícone 1" className="sidebar-icon" />
            <span className="sidebar-text">Início</span>
          </div>
          <div className="sidebar-item">
            <img src={Icon2} alt="Ícone 2" className="sidebar-icon" />
            <span className="sidebar-text">Vagas</span>
          </div>
          <div className="sidebar-item">
            <img src={Icon3} alt="Ícone 3" className="sidebar-icon" />
            <span className="sidebar-text">Meu Escritório</span>
          </div>
          <div className="sidebar-item">
            <img src={Icon4} alt="Ícone 4" className="sidebar-icon" />
            <span className="sidebar-text">Sobre a TIL</span>
          </div>
        </div>
      </div>
      {/* Ícones visíveis apenas no mobile */}
      <img src={MobileIconMsg} alt="Mensagem" className="mobile-icon left-icon" />
      <img src={MobileIconConfig} alt="Configuração" className="mobile-icon right-icon" />
    </header>
  );
};

export default Header;
