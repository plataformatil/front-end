import React from "react";
import "./WhiteRectangle.css";
import userImage from "../assets/user.png";

const WhiteRectangle = ({ userName, selectedAccessory }) => {
  return (
    <div className="white-rectangle">
      <div className="user-container">
        <img src={userImage} alt="Usuário" className="user-image" />
        {selectedAccessory && (
          <img
            src={selectedAccessory}
            alt="Acessório selecionado"
            className="accessory-image"
          />
        )}
      </div>
      <p className="user-name">{userName}</p>
    </div>
  );
};

export default WhiteRectangle;
