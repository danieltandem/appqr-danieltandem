import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import Seo from "../components/seo"
import Halt from "../components/header/halt"
import "../components/css-pages/usuario.css"
import Footer from "../components/footer/Footer"
import BtnPrimary from "../components/buttons/BtnPrimary"
import BtnBack from "../components/buttons/BtnBack"
function Usuario() {
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
      <div>
        <div class="user">
          <p className="namePerfil">Hola, {userName}.</p>
          {/* <BtnPrimary>Ver mis QR</BtnPrimary> */}
          <Link to="/listausuarios">
            <BtnPrimary>Ver usuarios</BtnPrimary>
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
