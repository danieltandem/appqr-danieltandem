import React, { useState } from "react"
import { Link } from "gatsby"
import "../buttons/buttons.css"

function BtnAcceso() {
  return (
    <Link to="/accesoregistro">
    <button class="btnAcceso animationFundido">
      <i class="animation"></i>Acceso Generador QR<i class="animation"></i>
    </button>
  </Link>
  )
}
export default BtnAcceso