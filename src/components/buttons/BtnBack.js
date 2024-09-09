import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "../buttons/buttons.css"

function BtnBack() {
  const handleBackClick = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = '/'; // Redirige a la página de inicio si no hay historial
    }
  };

  return (
    <button className="btnBack animationFundido" onClick={handleBackClick}>
      <StaticImage
        className="profile-2"
        src="../../images/icons/icon-back.png"
        alt="Atrás"
      />
    </button>
  )
}

export default BtnBack