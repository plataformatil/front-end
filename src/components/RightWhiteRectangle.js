import React from "react"; // Importa o React para que possamos usar JSX
import "./RightWhiteRectangle.css"; // Importa o arquivo CSS para estilizar o componente

function RightWhiteRectangle() {
  return (
    <div className="right-white-rectangle"> {/* Contêiner principal do retângulo branco */}
      {/* Cada div com a classe .orange-button é um botão dentro do retângulo */}
      <div className="orange-button">
        <span className="text1">TIL:</span> {/* Texto principal "TIL:" */}
        <span className="text2">
          Novo status para sua candidatura em [nome da empresa] - [cargo]
        </span> {/* Descrição do status */}
      </div>
      <div className="orange-button">
        <span className="text1">TIL:</span> {/* Texto principal "TIL:" */}
        <span className="text2">
          Novo feedback da [nome da empresa] - [cargo]
        </span> {/* Descrição do feedback */}
      </div>
      <div className="orange-button">
        <span className="text1">TIL:</span> {/* Texto principal "TIL:" */}
        <span className="text2">
          Novo status para sua candidatura em [nome da empresa] - [cargo]
        </span> {/* Descrição do status */}
      </div>
      <div className="orange-button">
        <span className="text1">TIL:</span> {/* Texto principal "TIL:" */}
        <span className="text2">
          Novo status para sua candidatura em [nome da empresa] - [cargo]
        </span> {/* Descrição do status */}
      </div>
    </div>
  );
}

export default RightWhiteRectangle; // Exporta o componente para ser usado em outros arquivos
