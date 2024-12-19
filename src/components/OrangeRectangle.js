import React from "react";
import "./OrangeRectangle.css";

const OrangeRectangle = () => {
  return (
    <div className="orange-rectangle">
      {/* Título no topo do retângulo, com estilo de texto branco */}
      <h3 style={{ color: "white", margin: "0" }}>Resumo semanal</h3>

      {/* Primeiro quadrado */}
      <div className="square">
        {/* Texto superior do primeiro quadrado, com a cor laranja e alinhamento ao centro */}
        <p
          style={{ color: "#f46720", textAlign: "center", margin: "10px 0 0" }}
        >
          20
        </p>
        {/* Texto inferior do primeiro quadrado */}
        <p
          style={{ color: "#f46720", textAlign: "center", margin: "10px 0 0" }}
        >
          Vagas aplicadas
        </p>
      </div>

      {/* Segundo quadrado */}
      <div className="square">
        {/* Texto superior do segundo quadrado */}
        <p
          style={{ color: "#f46720", textAlign: "center", margin: "10px 0 0" }}
        >
          14
        </p>
        {/* Texto inferior do segundo quadrado */}
        <p
          style={{ color: "#f46720", textAlign: "center", margin: "10px 0 0" }}
        >
          Empresas que viram seu perfil
        </p>
      </div>

      {/* Terceiro quadrado */}
      <div className="square">
        {/* Texto superior do terceiro quadrado */}
        <p
          style={{ color: "#f46720", textAlign: "center", margin: "10px 0 0" }}
        >
          3
        </p>
        {/* Texto inferior do terceiro quadrado */}
        <p
          style={{ color: "#f46720", textAlign: "center", margin: "10px 0 0" }}
        >
          Seletivos abertos
        </p>
      </div>
    </div>
  );
};

export default OrangeRectangle;
