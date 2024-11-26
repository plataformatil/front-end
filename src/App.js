import React, { useState } from "react";
import Header from "./components/Header";
import UserGreeting from "./components/UserGreeting";
import FooterImage from "./components/FooterImage";
import OrangeRectangle from "./components/OrangeRectangle";
import WhiteRectangle from "./components/WhiteRectangle";
import WhiteRectangleTwo from "./components/WhiteRectangleTwo";
import BlueRectangle from "./components/BlueRectangle";
import RightWhiteRectangle from "./components/RightWhiteRectangle";

const App = () => {
  const [selectedAccessory, setSelectedAccessory] = useState(null);

  // Função para atualizar o acessório selecionado
  const handleAccessoryClick = (accessory) => {
    setSelectedAccessory(accessory);
  };

  return (
    <div>
      <Header />
      <UserGreeting userName="usuário" />

      {/* Container para os retângulos */}
      <div className="rectangle-container">
        <OrangeRectangle />
        <WhiteRectangle
          userName="Nome do usuário"
          selectedAccessory={selectedAccessory} // Passa o acessório selecionado
        />
        <WhiteRectangleTwo onAccessoryClick={handleAccessoryClick} /> {/* Passa a função */}
        <BlueRectangle />
        <RightWhiteRectangle />
      </div>

      <FooterImage />
    </div>
  );
};

export default App;
