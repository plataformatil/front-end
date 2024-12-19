import React from "react"; 
// Importa o React para usar no componente, permitindo criar JSX e utilizar hooks.

import "./WhiteRectangleTwo.css"; 
// Importa o arquivo de estilos CSS para o componente WhiteRectangleTwo.

import engrenagem from "../assets/engrenagem.png"; 
// Importa a imagem de uma engrenagem para ser usada no componente.

import menu1 from "../assets/menu1.png"; 
// Importa a imagem do Menu 1.

import menu2 from "../assets/menu2.png"; 
// Importa a imagem do Menu 2.

import cor1 from "../assets/cor1.png"; 
import cor2 from "../assets/cor2.png"; 
import cor3 from "../assets/cor3.png"; 
import cor4 from "../assets/cor4.png"; 
import cor5 from "../assets/cor5.png"; 
// Importa as imagens de cores que serão exibidas como opções no componente.

import acessorio1 from "../assets/acessorio1.png"; 
import acessorio2 from "../assets/acessorio2.png"; 
import acessorio3 from "../assets/acessorio3.png"; 
import acessorio4 from "../assets/acessorio4.png"; 
import acessorio5 from "../assets/acessorio5.png"; 
// Importa as imagens de acessórios que serão exibidas como opções de escolha.

const WhiteRectangleTwo = ({ onAccessoryClick }) => { 
// Define o componente funcional `WhiteRectangleTwo`. Ele recebe a função `onAccessoryClick` como uma propriedade.

  const accessories = [acessorio1, acessorio2, acessorio3, acessorio4, acessorio5];
// Cria um array com as imagens dos acessórios importados.

  return ( 
    // Retorna o JSX que vai ser renderizado pelo componente.

    <div className="white-rectangle-two">
      {/* Cria a div principal com a classe CSS `white-rectangle-two` */}

      <img src={engrenagem} alt="Engrenagem" className="gear-icon" /> 
      {/* Exibe a imagem da engrenagem com a classe CSS `gear-icon` */}

      <p className="cor-label">Cor:</p>
      {/* Exibe o texto "Cor:" com a classe CSS `cor-label` */}

      <div className="color-overlay">
        {/* Cria uma sobreposição para as opções de cores */}

        <img src={menu1} alt="Menu 1" className="image" />
        {/* Exibe a imagem do Menu 1 com a classe CSS `image` */}

        <div className="color-images">
          {/* Cria um contêiner para as imagens de cores */}

          <img src={cor1} alt="Cor 1" className="color-image" />
          <img src={cor2} alt="Cor 2" className="color-image" />
          <img src={cor3} alt="Cor 3" className="color-image" />
          <img src={cor4} alt="Cor 4" className="color-image" />
          <img src={cor5} alt="Cor 5" className="color-image" />
          {/* Exibe cada uma das imagens de cor com a classe `color-image` */}
        </div>
      </div>

      <p className="image-label">Acessórios:</p>
      {/* Exibe o texto "Acessórios:" com a classe CSS `image-label` */}

      <div className="accessory-overlay">
        {/* Cria uma sobreposição para os acessórios */}

        <img src={menu2} alt="Menu 2" className="image" />
        {/* Exibe a imagem do Menu 2 com a classe CSS `image` */}

        <div className="accessory-images">
          {/* Cria um contêiner para as imagens de acessórios */}

          {accessories.map((accessory, index) => (
            // Mapeia o array `accessories` para exibir cada imagem de acessório

            <img
              key={index}
              src={accessory}
              alt={`Acessório ${index + 1}`}
              className="accessory-image"
              onClick={() => onAccessoryClick(accessory)} 
              // Exibe a imagem do acessório e define o evento `onClick` para chamar a função `onAccessoryClick`
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhiteRectangleTwo;
// Exporta o componente `WhiteRectangleTwo` para que possa ser usado em outros arquivos.
