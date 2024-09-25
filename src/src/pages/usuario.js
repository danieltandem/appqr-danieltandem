import React, { useState, useEffect } from "react"
import Seo from "../components/seo"
import Halt from "../components/header/halt"
import "../components/css-pages/usuario.css"
import Footer from "../components/footer/Footer"
import BtnBack from "../components/buttons/BtnBack"
import { Link } from "gatsby"
import BtnAcceso from "../components/buttons/btnAcceso"
import BtnPrimary from "../components/buttons/BtnPrimary"
import BtnSupport from "../components/buttons/BtnSupport"
import BtnUserEdit from "../components/buttons/BtnEditUser"

export default function Usuario() {
  const [users, setUsers] = useState([])
  const [message, setMessage] = useState("")
  const [userName, setUserName] = useState("")
  const [role, setRole] = useState("null")
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(
          `https://vigas.tandempatrimonionacional.eu/vigas/v1/user/list-user.php`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        setUsers(data.users)
        setMessage(data.menssage)

        const storedUserName = localStorage.getItem("userName")
        const storedUserRole = localStorage.getItem("userRole")
        setRole(storedUserRole)

        const loggedInUser = data.users.find(
          user => user.name === storedUserName
        )
        if (loggedInUser) {
          setCurrentUser(loggedInUser)
        }

        if (storedUserName) {
          setUserName(storedUserName)
        }
      } catch (error) {
        console.error("Error al buscar la lista de usuarios", error)
      }
    }
    fetchUser()
  }, [])

  const updateUserName = (email, newName) => {
    setUsers(prevUsers =>
      prevUsers.map(user =>
        user.email === email ? { ...user, name: newName } : user
      )
    )

    if (currentUser && currentUser.email === email) {
      setCurrentUser({ ...currentUser, name: newName })
      setUserName(newName)
      localStorage.setItem("userName", newName)
    }
  }

  if (!role) {
    return (
      <>
        <Halt />
        <h1>Debe registrarse para poder ver el contenido de esta página.</h1>
        <h3>Esta aplicación requiere de autentificación.</h3>
        <p>Puede registrarse presionando el siguiente botón:</p>
        <BtnAcceso />
        <Footer />
      </>
    )
  }

  if (!currentUser) {
    return (
      <>
        <Halt />
        <h1>Usuario no encontrado o no autenticado.</h1>
        <Footer />
      </>
    )
  }

  if (role === "guest" || role === "employee") {
    return (
      <>
        <Halt />
        <div>
          <div className="user" key={currentUser.id} id={currentUser.id}>
            <p className="namePerfil">Hola, {userName}.</p>
            <p>Desde aqui podras cambiar tu nombre o contraseña:</p>
            <BtnUserEdit
              mailto={currentUser.email}
              updateUserName={updateUserName}
            />
            <p>Si tienes algun problema cuentanoslo aqui:</p>
            <BtnSupport />
          </div>
        </div>
        <BtnBack />
        <Footer />
      </>
    )
  }

  if (role === "admin") {
    return (
      <>
        <Halt />
        <div>
          <div className="user" key={currentUser.id} id={currentUser.id}>
            <p className="namePerfil">Hola, {userName}.</p>
            <p>Desde aqui podras cambiar tu nombre o contraseña:</p>
            <BtnUserEdit
              mailto={currentUser.email}
              updateUserName={updateUserName}
            />
            <p>Desde aqui podras gestionar la pagina:</p>
            <Link to="/listausuarios">
              <BtnPrimary>Ver usuarios</BtnPrimary>
            </Link>
            <Link to="/listaqradmin">
              <BtnPrimary>Ver todos los QR</BtnPrimary>
            </Link>
          </div>
        </div>
        <BtnBack />
        <Footer />
      </>
    )
  }
}
export const Head = () => <Seo title="Usuario" />
