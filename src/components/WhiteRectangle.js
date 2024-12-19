import React from "react";
// Importa a biblioteca React para criar componentes no React.

import "./WhiteRectangle.css";
// Importa o arquivo CSS específico para o estilo do componente WhiteRectangle.

import userImage from "../assets/user.png";
// Importa a imagem do usuário para ser exibida no componente WhiteRectangle.

const WhiteRectangle = ({ userName, selectedAccessory }) => {
// Define o componente funcional WhiteRectangle, que recebe userName (nome do usuário)
// e selectedAccessory (imagem do acessório selecionado) como propriedades.

  return (
    <div className="white-rectangle">
    {/* Cria a div principal do componente com a classe "white-rectangle" */}

      <div className="user-container">
      {/* Cria uma div para conter a imagem do usuário e o acessório (se houver) */}

        <img src={userImage} alt="Usuário" className="user-image" />
        {/* Exibe a imagem do usuário importada anteriormente, com a classe "user-image" */}

        {selectedAccessory && (
          // Verifica se selectedAccessory foi passado e, se sim, exibe o ícone de acessório.
          <img
            src={selectedAccessory}
            alt="Acessório selecionado"
            className="accessory-image"
          />
        )}

      </div>

      <p className="user-name">{userName}</p>
      {/* Exibe o nome do usuário com a classe "user-name" */}

    </div>
  );
};

export default WhiteRectangle;
// Exporta o componente WhiteRectangle para ser usado em outros arquivos.
