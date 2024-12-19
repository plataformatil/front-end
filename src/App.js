import React, { useState } from "react";
import Header from "./components/Header";
import UserGreeting from "./components/UserGreeting";
import FooterImage from "./components/FooterImage";
import OrangeRectangle from "./components/OrangeRectangle";
import WhiteRectangle from "./components/WhiteRectangle";
import WhiteRectangleTwo from "./components/WhiteRectangleTwo";
import BlueRectangle from "./components/BlueRectangle";
import RightWhiteRectangle from "./components/RightWhiteRectangle";

// Componente App principal
const App = () => {
  // Hook de estado para controlar o acessório selecionado
  const [selectedAccessory, setSelectedAccessory] = useState(null);

  // Função para atualizar o acessório selecionado
  const handleAccessoryClick = (accessory) => {
    setSelectedAccessory(accessory);
  };

  return (
    <div>
      {/* Cabeçalho da página */}
      <Header />
      
      {/* Saudação ao usuário */}
      <UserGreeting userName="usuário" />

      {/* Container para os retângulos */}
      <div className="rectangle-container">
        {/* Retângulo laranja */}
        <OrangeRectangle />
        
        {/* Retângulo branco com nome de usuário e acessório selecionado */}
        <WhiteRectangle
          userName="Nome do usuário"
          selectedAccessory={selectedAccessory} // Passa o acessório selecionado
        />
        
        {/* Retângulo branco dois e passa a função de clique para selecionar acessórios */}
        <WhiteRectangleTwo onAccessoryClick={handleAccessoryClick} />
        
        {/* Retângulo azul */}
        <BlueRectangle />
        
        {/* Retângulo branco à direita */}
        <RightWhiteRectangle />
      </div>

      {/* Imagem do rodapé */}
      <FooterImage />
    </div>
  );
};

export default App;
