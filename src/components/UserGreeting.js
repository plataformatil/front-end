import React from "react";
import { Helmet } from "react-helmet";
import "./UserGreeting.css";
import { FaCog } from "react-icons/fa";

const UserGreeting = ({ userName }) => {
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
    </div>
  );
};

export default UserGreeting;
