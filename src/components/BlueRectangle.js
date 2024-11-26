import React from "react";
import "./BlueRectangle.css";
import controleImage from "../assets/controle.png";

const BlueRectangle = () => {
  return (
    <div className="blue-rectangle">
      <img src={controleImage} alt="Controle" className="controle-img" />
      <span className="blue-rectangle-text">Sala de Jogos</span>
    </div>
  );
};

export default BlueRectangle;
