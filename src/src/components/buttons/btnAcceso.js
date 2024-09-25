import React from "react"
import { Link } from "gatsby"
import "../buttons/buttons.css"

function BtnAcceso() {
  return (
    <Link to="/accesoregistro">
    <button className="btnAcceso animationFundido">
      <i className="animation"></i>Acceso Generador QR<i className="animation"></i>
    </button>
  </Link>
  )
}
export default BtnAcceso