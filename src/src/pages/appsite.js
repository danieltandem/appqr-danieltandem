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
import BtnAcceso from "../components/buttons/btnAcceso"
import BtnSupport from "../components/buttons/BtnSupport"

export default function AppSite() {
  const [userName, setUserName] = useState("")
  const [role, setRole] = useState("null")
  useEffect(() => {
    const storedUserName = localStorage.getItem("userName")
    setRole(localStorage.getItem('userRole'));
    if (storedUserName) {
      setUserName(storedUserName)
    }
  }, [])
  if (!role) {
    return (
      <>
        <Halt></Halt>
        <h1>Debe registrarse para poder ver el contenido de esta página.</h1>
        <h3>Esta aplicación requiere de autentificación.</h3>
        <p>Puede registrarse presionando el siguiente botón:</p>
        <BtnAcceso></BtnAcceso>
        <Footer></Footer>
      </>
    )
  }
  if (role === "guest") {
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
        <h1>
          Si quiere crear códigos QR contacte con la administración para que le
          de los permisos, puede hacerlo desde aqui:
        </h1>
        <br/>
        <BtnSupport></BtnSupport>
        <br />
      
        <Footer></Footer>
      </>
    )
  }

  if (role === "employee") {
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
            <h2 className="osc">Entra aqui para crear tus QR</h2>
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
            <h2 className="osc">Entra aqui para ver tus QR</h2>
            <Link to="/listaqr">
              <BtnSecondary className="btnLarge">Lista QR</BtnSecondary>
            </Link>
          </div>
        </section>
        <Footer></Footer>
      </>
    )
  }
  if (role === "admin") {
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
            <h2 className="osc">Entra aqui para crear tus QR</h2>
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
            <h2 className="osc">Entra aqui para ver tus QR</h2>
            <Link to="/listaqr">
              <BtnSecondary className="btnLarge">Lista QR</BtnSecondary>
            </Link>
          </div>
        </section>
        <Footer></Footer>
      </>
    )
  }
}

export const Head = () => <Seo title="App site" />
