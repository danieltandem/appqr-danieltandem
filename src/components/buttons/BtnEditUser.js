import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import "../buttons/buttons.css"
import BtnClose from "./BtnClose"
import BtnSecondary from "./BtnSecondary"
import "../user&admin/changedatauser.css"
import useAutoCloseModal from "../funcionalidades/useAutoCloseModal"

function BtnUserEdit({ mailto, updateUserName }) {
  const { isOpen, toggleModal, setAutoClose } = useAutoCloseModal()
  const [mail] = useState(mailto)
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [responseMessage, setResponseMessage] = useState("")

  const handleChangeName = async () => {
    try {
      const response = await fetch(
        "https://vigas.tandempatrimonionacional.eu/dani/v1/user/change-name.php",
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: mail, name }),
        }
      )
      const data = await response.json()
      setResponseMessage(data.message)
      if (response.ok) {
        updateUserName(mail, name) // Actualiza el nombre del usuario en la página
        setAutoClose(true) // Activa el auto cierre después de recibir la respuesta exitosa
      }
    } catch (error) {
      console.error("Error al cambiar el nombre:", error)
      setResponseMessage("Error al cambiar el nombre")
    }
  }

  const handleChangePassword = async () => {
    try {
      const response = await fetch(
        "http://localhost/bd-appqr/v1/user/change-password.php",
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: mail, password }),
        }
      )
      const data = await response.json()
      setResponseMessage(data.message)
      setAutoClose(true) // Activa el auto cierre después de recibir la respuesta exitosa
    } catch (error) {
      console.error("Error al cambiar la contraseña:", error)
      setResponseMessage("Error al cambiar la contraseña")
    }
  }

  return (
    <>
      <div className="tooltip-container-configRol">
        <button
          className="btnUserEdit animationFundido" // Corregido el nombre de la clase
          onClick={toggleModal}
        >
          <div className="icon-role-container">
            <StaticImage
              className="icon-role"
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
              <BtnClose onClick={toggleModal} />
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
