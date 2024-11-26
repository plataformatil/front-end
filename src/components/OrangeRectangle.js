import React from "react";
import "./OrangeRectangle.css";

const OrangeRectangle = () => {
  return (
    <div className="orange-rectangle">
      <h3 style={{ color: "white", margin: "0" }}>Resumo semanal</h3>{" "}
      {/* Texto no topo do retângulo */}
      <div className="square">
        <p
          style={{ color: "#f46720", textAlign: "center", margin: "10px 0 0" }}
        >
          20
        </p>{" "}
        {/* Texto na parte superior do primeiro quadrado */}
        <p
          style={{ color: "#f46720", textAlign: "center", margin: "10px 0 0" }}
        >
          Vagas aplicadas
        </p>{" "}
        {/* Texto na parte inferior do primeiro quadrado */}
      </div>
      <div className="square">
        <p
          style={{ color: "#f46720", textAlign: "center", margin: "10px 0 0" }}
        >
          14
        </p>{" "}
        {/* Texto na parte superior do segundo quadrado */}
        <p
          style={{ color: "#f46720", textAlign: "center", margin: "10px 0 0" }}
        >
          Empresas que viram seu perfil
        </p>{" "}
        {/* Texto na parte inferior do segundo quadrado */}
      </div>
      <div className="square">
        <p
          style={{ color: "#f46720", textAlign: "center", margin: "10px 0 0" }}
        >
          3
        </p>{" "}
        {/* Texto na parte superior do terceiro quadrado */}
        <p
          style={{ color: "#f46720", textAlign: "center", margin: "10px 0 0" }}
        >
          Seletivos abertos
        </p>{" "}
        {/* Texto na parte inferior do terceiro quadrado */}
      </div>
    </div>
  );
};

export default OrangeRectangle;
