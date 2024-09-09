import React, { useState } from "react"
import { Link } from "gatsby"
import "../buttons/buttons.css"
import { StaticImage } from "gatsby-plugin-image"

function BtnNuevoQr() {
  return (
    <Link to="/crearqr">
      <button class="btnNuevoQr nqrybus">
        <StaticImage
          className="imgnuevoqr"
          src="../../images/icons/qricon.png"
          alt="Icono Boton Qr"
        />
        <p className="pnuevoqr">Nuevo QR</p>
      </button>
    </Link>
  )
}
export default BtnNuevoQr