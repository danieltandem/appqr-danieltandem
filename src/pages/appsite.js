import React, { useState, useEffect } from "react"
import Seo from "../components/seo"
import Halt from "../components/header/halt"
import "../components/css-pages/appsite.css"
import Footer from "../components/footer/Footer"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import BtnPrimary from "../components/buttons/BtnPrimary"
import BtnSecondary from "../components/buttons/BtnSecondary"
import BtnProfile from "../components/buttons/BtnProfile"
import BtnInfoUser from "../components/buttons/BtnInfoUser"

function AppSite() {
  const [userName, setUserName] = useState("")
  useEffect(() => {
    const storedUserName = localStorage.getItem("userName")
    if (storedUserName) {
      setUserName(storedUserName)
    }
  }, [])

  return (
    <>
      <Halt></Halt>
      <BtnInfoUser></BtnInfoUser>
      <div className="profileName">
        <BtnProfile></BtnProfile>
        <Link to="/usuario">
          <p className="namePerfil">{userName}</p>
        </Link>
      </div>
      <section className="appSiteSelection animationFundido">
        <div className="ColumnSite1">
          <StaticImage
            src="../images/appsite/CrearQR.png"
            alt="Crear QR"
            height={245}
          />
          <h2>Entra aqui para crear tus QR</h2>
          <Link to="/crearqr">
            <BtnPrimary className="btnLarge">Crear QR</BtnPrimary>
          </Link>
        </div>
        <div className="ColumnSite2">
          <StaticImage
            src="../images/appsite/ListaQR.png"
            alt="Listar QR"
            height={245}
          />
          <h2>Entra aqui para ver tus QR</h2>
          <Link to="/listaqr">
            <BtnSecondary className="btnLarge">Lista QR</BtnSecondary>
          </Link>
        </div>
      </section>
      <Footer></Footer>
    </>
  )
}

export const Head = () => <Seo title="App site" />
export default AppSite
