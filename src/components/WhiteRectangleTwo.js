import React from "react";
import "./WhiteRectangleTwo.css";
import engrenagem from "../assets/engrenagem.png";
import menu1 from "../assets/menu1.png";
import menu2 from "../assets/menu2.png";
import cor1 from "../assets/cor1.png";
import cor2 from "../assets/cor2.png";
import cor3 from "../assets/cor3.png";
import cor4 from "../assets/cor4.png";
import cor5 from "../assets/cor5.png";
import acessorio1 from "../assets/acessorio1.png";
import acessorio2 from "../assets/acessorio2.png";
import acessorio3 from "../assets/acessorio3.png";
import acessorio4 from "../assets/acessorio4.png";
import acessorio5 from "../assets/acessorio5.png";

const WhiteRectangleTwo = ({ onAccessoryClick }) => {
  const accessories = [acessorio1, acessorio2, acessorio3, acessorio4, acessorio5];

  return (
    <div className="white-rectangle-two">
      <img src={engrenagem} alt="Engrenagem" className="gear-icon" /> {}
      <p className="cor-label">Cor:</p> {}
      <div className="color-overlay">
        <img src={menu1} alt="Menu 1" className="image" />
        <div className="color-images">
          <img src={cor1} alt="Cor 1" className="color-image" />
          <img src={cor2} alt="Cor 2" className="color-image" />
          <img src={cor3} alt="Cor 3" className="color-image" />
          <img src={cor4} alt="Cor 4" className="color-image" />
          <img src={cor5} alt="Cor 5" className="color-image" />
        </div>
      </div>
      <p className="image-label">Acessórios:</p> {}
      <div className="accessory-overlay">
        <img src={menu2} alt="Menu 2" className="image" />
        <div className="accessory-images">
          {accessories.map((accessory, index) => (
            <img
              key={index}
              src={accessory}
              alt={`Acessório ${index + 1}`}
              className="accessory-image"
              onClick={() => onAccessoryClick(accessory)} // Chama a função no clique
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhiteRectangleTwo;
