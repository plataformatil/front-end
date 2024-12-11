import React, { useState } from "react";
import { Helmet } from "react-helmet";
import "./UserGreeting.css";
import { FaCog, FaBars } from "react-icons/fa"; // Importando o ícone do menu hambúrguer

const UserGreeting = ({ userName }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar a abertura do menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Alterna o estado do menu
  };

  return (
    <div className="user-greeting">
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <span className="user-greeting-text">Olá, {userName || "Usuário"}!</span>

      <button className="profile-button">
        Configurar Perfil <FaCog className="icon" />
      </button>

      {/* Menu Hambúrguer */}
      <div className="hamburger-menu" onClick={toggleMenu}>
        <FaBars className="hamburger-icon" />
      </div>

      {/* Menu Lateral */}
      {isMenuOpen && (
        <div className="side-menu">
          <ul>
            <li>Home</li>
            <li>Perfil</li>
            <li>Configurações</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserGreeting;
