import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import BtnTertiary from "../components/buttons/BtnTertiary"
import BtnPrimary from "../components/buttons/BtnPrimary"

<div class="user">
  <BtnTertiary className="piolin">
    <StaticImage
      src="../images/QRs/qrnegro.png"
      alt="Ver QR"
      height={40}
    ></StaticImage>
    &nbsp;Cambiar imagen
  </BtnTertiary>
  <br></br>
  <BtnTertiary className="piolin">
    <StaticImage
      src="../images/QRs/qrnegro.png"
      alt="Ver QR"
      height={40}
    ></StaticImage>
    &nbsp;Cambiar nombre
  </BtnTertiary>
  <br></br>
  <BtnTertiary className="piolin">
    <StaticImage
      src="../images/QRs/qrnegro.png"
      alt="Ver QR"
      height={40}
    ></StaticImage>
    &nbsp;Cambiar contraseña
  </BtnTertiary>
  <br></br>
  <BtnPrimary className="piolin">
    <StaticImage
      src="../images/QRs/qrnegro.png"
      alt="Ver QR"
      height={40}
    ></StaticImage>
    &nbsp;Ver mis QR
  </BtnPrimary>
  <Link to="/listausuarios">
    <BtnPrimary className="piolin">
      <StaticImage
        src="../images/QRs/qrnegro.png"
        alt="Ver QR"
        height={40}
      ></StaticImage>
      &nbsp;Ver usuarios
    </BtnPrimary>
  </Link>
</div>