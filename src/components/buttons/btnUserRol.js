// btnUserRol.js
import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import "./buttons.css"
import "../modals/modal.css"
import BtnClose from "./BtnClose"
import SelectRol from "../selects/select-rol"
import BtnSecondary from "./BtnSecondary"
import useAutoCloseModal from "../funcionalidades/useAutoCloseModal"

function BtnRolUser({ mailto, updateUserRole }) {
  //updateUserRole hará que el cambio se refleje en la pág.
  const { isOpen, toggleModal, setAutoClose } = useAutoCloseModal()
  const [mail] = useState(mailto)
  const [selectedRole, setSelectedRole] = useState("")
  const [message, setMessage] = useState("")

  const handleRoleUser = async () => {
    try {
      console.log("Iniciando petición para cambiar rol", mail)

      const response = await fetch(
        "http://localhost/bd-appqr/v1/user/change-role.php",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: mail, role: selectedRole }),
        }
      )

      console.log("Respuesta recibida:", response)

      if (response.ok) {
        const data = await response.json()
        console.log("Datos recibidos:", data)
        setMessage(data.message)
        updateUserRole(mail, selectedRole) // Actualizo el rol del usuario
        setAutoClose(true) // Activo el auto cierre después de recibir la respuesta exitosa
      } else {
        const errorData = await response.json()
        console.error("Error en la respuesta del servidor:", errorData)
        setMessage(`Error en la respuesta del servidor: ${errorData.message}`)
      }
    } catch (error) {
      console.error("Error en la petición:", error)
      setMessage(`Error al cambiar el rol: ${error.message}`)
    }
  }

  const handleSelectRole = role => {
    setSelectedRole(role)
  }

  return (
    <React.Fragment>
      <div className="tooltip-container-configRol">
        <button className={`btnRolUser animationFundido`} onClick={toggleModal}>
          <div className="icon-role-container">
            <StaticImage
              className="icon-role"
              src="../../images/icons/config-rol.png"
              alt="Icon-Role"
            />
            <span>Editar Rol</span>
          </div>
        </button>
        <div className="tooltip-configRol">Editar Rol del Usuario</div>
      </div>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h2>Cambiar Rol de usuario</h2>
              <BtnClose onClick={toggleModal} />
            </div>
            <div className="modal-body">
              <p>
                Seleccione el Rol del usuario con email: <b>{mail}</b>. Se
                guardará automáticamente:
              </p>
              <SelectRol onSelect={handleSelectRole} />
              <BtnSecondary onClick={handleRoleUser}>&#10004;</BtnSecondary>
              {message && <p>{message}</p>}
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  )
}

export default BtnRolUser
