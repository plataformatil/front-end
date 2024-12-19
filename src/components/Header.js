import React, { useState } from "react"; // Importa React e useState para gerenciar estado
import "./Header.css"; // Importa o arquivo de estilos CSS
import Icon1 from "../assets/icon1.png"; // Ícone 1
import Icon2 from "../assets/icon2.png"; // Ícone 2
import Icon3 from "../assets/icon3.png"; // Ícone 3
import Icon4 from "../assets/icon4.png"; // Ícone 4
import MobileIconMsg from "../assets/msg.png"; // Ícone de mensagem, visível apenas no mobile
import MobileIconConfig from "../assets/config.png"; // Ícone de configuração, visível apenas no mobile

// Função principal do componente Header
const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false); // Estado para gerenciar a expansão da barra laranja

  return (
    <header className="header-container"> {/* Container principal do cabeçalho */}
      <h1 className="title">TIL</h1> {/* Título do cabeçalho */}
      
      {/* Barra laranja que expande ao passar o mouse */}
      <div
        className={`rectangle ${isExpanded ? "expanded" : ""}`} // Aplica a classe "expanded" quando a barra está expandida
        onMouseEnter={() => setIsExpanded(true)} // Expande a barra ao passar o mouse
        onMouseLeave={() => setIsExpanded(false)} // Recolhe a barra ao remover o mouse
      >
        {/* Sidebar que contém os ícones e textos */}
        <div className="sidebar">
          {/* Cada item da sidebar contém um ícone e um texto */}
          <div className="sidebar-item">
            <img src={Icon1} alt="Ícone 1" className="sidebar-icon" /> {/* Ícone 1 */}
            <span className="sidebar-text">Início</span> {/* Texto de navegação */}
          </div>
          <div className="sidebar-item">
            <img src={Icon2} alt="Ícone 2" className="sidebar-icon" /> {/* Ícone 2 */}
            <span className="sidebar-text">Vagas</span> {/* Texto de navegação */}
          </div>
          <div className="sidebar-item">
            <img src={Icon3} alt="Ícone 3" className="sidebar-icon" /> {/* Ícone 3 */}
            <span className="sidebar-text">Meu Escritório</span> {/* Texto de navegação */}
          </div>
          <div className="sidebar-item">
            <img src={Icon4} alt="Ícone 4" className="sidebar-icon" /> {/* Ícone 4 */}
            <span className="sidebar-text">Sobre a TIL</span> {/* Texto de navegação */}
          </div>
        </div>
      </div>

      {/* Ícones visíveis apenas no mobile */}
      <img src={MobileIconMsg} alt="Mensagem" className="mobile-icon left-icon" /> {/* Ícone de mensagem */}
      <img src={MobileIconConfig} alt="Configuração" className="mobile-icon right-icon" /> {/* Ícone de configuração */}
    </header>
  );
};

export default Header; // Exporta o componente Header para uso em outros arquivos
