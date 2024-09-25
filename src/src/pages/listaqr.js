import React, { useState, useEffect } from "react"
import Seo from "../components/seo"
import Halt from "../components/header/halt"
import Footer from "../components/footer/Footer"
import ListQr2 from "../components/listqr/listqr2"
import BtnBack from "../components/buttons/BtnBack"
import BtnUp from "../components/buttons/BtnUp"
import BtnAcceso from "../components/buttons/btnAcceso"

function ListaQr() {

  const [userName, setUserName] = useState("")
  const [userId, setId] = useState("")
  const [role, setRole] = useState("null")

  useEffect(() => {
    const storedUserName = localStorage.getItem("userName")
    setRole(localStorage.getItem('userRole'));
    setId(localStorage.getItem('userId'));
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
  return (
    <>
      <Halt></Halt>
      <ListQr2 url="https://vigas.tandempatrimonionacional.eu/vigas/v1/qr/list-qr.php"></ListQr2>
      <BtnBack />
      <BtnUp />
      <Footer></Footer>
    </>
  )
}

export const Head = () => <Seo title="Lista de QRs" />
export default ListaQr
