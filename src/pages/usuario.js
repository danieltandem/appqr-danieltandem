import React from "react"
import { Link } from "gatsby"
import Seo from "../components/seo"
import Halt from "../components/header/halt"
import "../components/css-pages/usuario.css"
import Footer from "../components/footer/Footer"
import { StaticImage } from "gatsby-plugin-image"
import BtnTertiary from "../components/buttons/BtnTertiary"
import BtnPrimary from "../components/buttons/BtnPrimary"
import BtnBack from "../components/buttons/BtnBack"

function Usuario() {
  return (
    <>
      <Halt></Halt>
      <div>
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
      </div>
      <BtnBack></BtnBack>
      <Footer></Footer>
    </>
  )
}

export const Head = () => <Seo title="Usuario" />
export default Usuario
