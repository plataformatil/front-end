import React, { useState } from "react"; 
// Importa o React e o hook useState para gerenciar o estado no componente

import { Helmet } from "react-helmet"; 
// Importa o Helmet para inserir a tag <link> de fontes no head do HTML

import "./UserGreeting.css"; 
// Importa o arquivo CSS com os estilos específicos para o componente

import { FaCog, FaBars } from "react-icons/fa"; 
// Importa os ícones FaCog (configurações) e FaBars (menu hambúrguer) da biblioteca react-icons/fa

const UserGreeting = ({ userName }) => { 
  // Define o componente funcional UserGreeting que recebe a prop userName

  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  // Cria um estado isMenuOpen (inicializado como false) para controlar a abertura do menu lateral

  const toggleMenu = () => { 
    // Define a função que alterna o estado do menu (abre ou fecha)
    setIsMenuOpen(!isMenuOpen); 
    // Altera o valor de isMenuOpen para o oposto (true ou false)
  };

  return (
    <div className="user-greeting"> 
      {/* Cria a div principal para o componente com a classe "user-greeting" */}
    
      <Helmet> 
        {/* Usado para adicionar conteúdo ao head da página */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap" 
          rel="stylesheet" 
        /> 
        {/* Adiciona a fonte 'Inter' ao documento HTML */}
      </Helmet>
    
      <span className="user-greeting-text">Olá, {userName || "Usuário"}!</span>
      {/* Exibe a saudação, usando o nome do usuário ou "Usuário" caso o nome não seja fornecido */}
    
      <button className="profile-button">
        Configurar Perfil <FaCog className="icon" /> 
        {/* Exibe um botão para "Configurar Perfil" com o ícone de configurações */}
      </button>

      <div className="hamburger-menu" onClick={toggleMenu}>
        {/* Cria o ícone do menu hambúrguer, que chama a função toggleMenu ao ser clicado */}
        <FaBars className="hamburger-icon" /> 
        {/* Exibe o ícone do menu hambúrguer */}
      </div>

      {isMenuOpen && (
        <div className="side-menu">
          {/* Se isMenuOpen for true, exibe o menu lateral */}
          <ul>
            <li>Home</li>
            <li>Perfil</li>
            <li>Configurações</li>
          </ul>
        </div>
      )}
      {/* Lista de itens do menu lateral */}
    
    </div>
  );
};

export default UserGreeting;
// Exporte o componente UserGreeting para ser usado em outros arquivos
