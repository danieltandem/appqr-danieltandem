import React, { useState, useEffect } from "react"
import Seo from "../components/seo"
import Halt from "../components/header/halt"
import Footer from "../components/footer/Footer"
import ListUsers from "../components/listusers/listusers"
import BtnBack from "../components/buttons/BtnBack"
import BtnUp from "../components/buttons/BtnUp"
import BtnAcceso from "../components/buttons/btnAcceso"

function ListaUsuarios() {
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
  return (
    <>
      <Halt></Halt>
      <ListUsers url="https://vigas.tandempatrimonionacional.eu/vigas/v1/user/list-user.php"></ListUsers>
      <BtnBack></BtnBack>
      <BtnUp></BtnUp>
      <Footer></Footer>
    </>
  )
}
export const Head = () => <Seo title="Lista de usuarios" />
export default ListaUsuarios
