import React from "react"; // Importa o React para criar o componente
import "./BlueRectangle.css"; // Importa o arquivo CSS associado ao componente
import controleImage from "../assets/controle.png"; // Importa a imagem do controle

// Componente funcional BlueRectangle
const BlueRectangle = () => {
  return (
    // Contêiner principal do retângulo azul
    <div className="blue-rectangle">
      {/* Imagem do controle */}
      <img src={controleImage} alt="Controle" className="controle-img" />
      
      {/* Texto dentro do retângulo azul */}
      <span className="blue-rectangle-text">Sala de Jogos</span>
    </div>
  );
};

// Exporta o componente para que possa ser utilizado em outros arquivos
export default BlueRectangle;
