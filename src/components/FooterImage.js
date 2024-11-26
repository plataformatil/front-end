import React from "react";
import "./FooterImage.css";
import Ajuda from "../assets/Ajuda.png";

const FooterImage = () => {
  return <img src={Ajuda} alt="Ajuda" className="ajuda-image" />;
};

export default FooterImage;
