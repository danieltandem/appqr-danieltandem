import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import "../buttons/buttons.css"
import BtnSecondary from "./BtnSecondary"
import "../css-pages/usuario.css"
import useAutoCloseModal from "../funcionalidades/useAutoCloseModal"

function BtnUserEdit({ mailto, updateUserName }) {
  const { isOpen, toggleModal: baseToogleModal, setAutoClose } = useAutoCloseModal()
  const [mail] = useState(mailto)
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [responseMessage, setResponseMessage] = useState("")

  const toggleModal = ()=>{
    if (isOpen){
      setName("")
      setPassword("")
      setResponseMessage("")
    }
    baseToogleModal()
  }

  const handleChangeName = async () => {
    try {
      const response = await fetch(
        "https://vigas.tandempatrimonionacional.eu/vigas/v1/user/change-name.php",
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: mail, name }),
        }
      )
      const data = await response.json()
      setResponseMessage(data.message)
      if (response.ok) {
        updateUserName(mail, name) 
        setAutoClose(true) 
      }
    } catch (error) {
      console.error("Error al cambiar el nombre:", error)
      setResponseMessage("Error al cambiar el nombre")
    }
  }

  const handleChangePassword = async () => {
    try {
      const response = await fetch(
        "https://vigas.tandempatrimonionacional.eu/vigas/v1/user/change-password.php",
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: mail, password }),
        }
      )
      const data = await response.json()
      setResponseMessage(data.message)
      setAutoClose(true)
    } catch (error) {
      console.error("Error al cambiar la contraseña:", error)
      setResponseMessage("Error al cambiar la contraseña")
    }
  }

  return (
    <>
      <div className="tooltip-container-configRol">
        <button className="btnUserEdit animationFundido" onClick={toggleModal}>
          <div className="icon-role-container">
            <StaticImage
              className="icon-role btnwhite"
              src="../../images/icons/editar-usuario.png"
              alt="Icon-Role"
            />
            <span>Editar Usuario</span>
          </div>
        </button>
        <div className="tooltip-configRol">Modificar Usuario</div>
      </div>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h2>Modificar datos de Usuario</h2>
              <button className="close-modificar-user" onClick={toggleModal}>❌</button>
            </div>
            <div className="modal-body">
              <p>
                Indique su nuevo nombre o contraseña para el usuario con correo{" "}
                <b>{mail}</b>:
              </p>
              <label htmlFor="changeNameInput" className="changeName">
                Nombre completo*
                <input
                  type="text"
                  name="usernamechange"
                  id="changeNameInput"
                  className="changeNameInput"
                  placeholder="Nombre completo"
                  title="Debes poner tu nombre actual o tu nuevo nombre"
                  required
                  onChange={e => setName(e.target.value)}
                  value={name}
                />
              </label>
              <label htmlFor="changePasswordInput" className="changePassword">
                Contraseña*
                <input
                  type="text"
                  name="userpasswordchange"
                  id="changePasswordInput"
                  className="changePasswordInput"
                  placeholder="Contraseña"
                  title="Debes poner tu contraseña actual o tu nueva contraseña"
                  required
                  onChange={e => setPassword(e.target.value)}
                  value={password}
                />
              </label>
              <BtnSecondary onClick={handleChangeName}>
                Nombre&#10004;
              </BtnSecondary>
              <BtnSecondary onClick={handleChangePassword}>
                Contraseña&#10004;
              </BtnSecondary>
              {responseMessage && <p>{responseMessage}</p>}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default BtnUserEdit