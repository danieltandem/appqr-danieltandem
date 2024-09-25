import React, { useState } from "react";
import BtnInfo2 from "../buttons/BtnInfo2";
import BtnDeslizante from "../buttons/BtnDeslizante";
import "./cuadrado.css"; // Importa el archivo CSS

const Cuadrado = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="cuadrado-container">
      <div className="top-elements">
        <p className="info-text">Acepta usted el uso de los datos en nuestra página</p>
        <div className="desliz">
        <BtnDeslizante />
        </div>
      </div>
      <div >
      <BtnInfo2 isExpanded={isExpanded} toggleExpand={toggleExpand}  />
      </div>
      <div className={`expanded-content ${isExpanded ? 'open' : ''}`}>
      </div>
    </div>
  );
};

export default Cuadrado;