import React from "react"; // Importa a biblioteca React para usar JSX e recursos do React
import "./FooterImage.css"; // Importa o arquivo CSS para estilizar o componente
import Ajuda from "../assets/Ajuda.png"; // Importa a imagem "Ajuda" do diretório de assets

// Componente funcional FooterImage
const FooterImage = () => {
  return (
    // Retorna o elemento <img> com a imagem de ajuda
    <img src={Ajuda} alt="Ajuda" className="ajuda-image" /> // A imagem é referenciada pelo caminho "Ajuda.png" e aplica a classe "ajuda-image" para estilização
  );
};

export default FooterImage; // Exporta o componente FooterImage para ser usado em outras partes do aplicativo
