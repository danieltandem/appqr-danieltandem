import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import "./buttons.css"; // Asegúrate de que la ruta es correcta

const BtnInfo2 = ({ isExpanded, toggleExpand }) => {
  return (
    <div className="btn-info2-container">
      <button 
        type='button'
        onClick={toggleExpand} 
        className={`btnInfo2 ${isExpanded ? "expanded" : ""}`}
        aria-expanded={isExpanded}
        aria-controls="collapse-content"
      >
        <StaticImage
          className="icon-info"
          src="../../images/icons/icon-info.png" // Verifica que la ruta sea correcta
          alt="info"
        />
      </button>
      <div id="collapse-content" className={`collapse-content ${isExpanded ? 'open' : ''}`}>
        <p className='textooo'>Si quiere conocer como se van a tratar sus datos clické en el siguiente Enlace</p>
        <a href="/avisolegal" target="_blank" className="subray subrayar">
          Aviso Legal
        </a>
      </div>
    </div>
  );
};

export default BtnInfo2;