import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import "../buttons/buttons.css"
import BtnSecondary from "./BtnSecondary"

function BtnUserDelete({ mailto, deleteUser }) {
  const [isOpen, setIsOpen] = useState(false)
  const [mail] = useState(mailto)
  const [message, setMessage] = useState("")

  const toggleModal = () => {
    setIsOpen(!isOpen)
  }

  const handleDeleteUser = async () => {
    try {
      console.log("Iniciando petición para eliminar usuario", mail)

      const response = await fetch(
        "https://vigas.tandempatrimonionacional.eu/vigas/v1/user/delete-user.php",
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: mail }),
        }
      )

      console.log("Respuesta recibida:", response)

      if (response.ok) {
        const data = await response.json()
        console.log("Datos recibidos:", data)
        setMessage(data.message)
        deleteUser(mail) // Elimino el usuario de la lista en la página
      } else {
        const errorData = await response.json()
        console.error("Error en la respuesta del servidor:", errorData)
        setMessage(`Error en la respuesta del servidor: ${errorData.message}`)
      }
    } catch (error) {
      console.error("Error en la petición:", error)
      setMessage(`Error al eliminar el usuario: ${error.message}`)
    }
  }

  return (
    <React.Fragment>
      <div className="tooltip-container-configRol">
        <button
          className={`btnUserDelete animationFundido`}
          onClick={toggleModal}
        >
          <div className="icon-role-container">
            <StaticImage
              className="icon-role btnwhite"
              src="../../images/icons/borrar-usuario.png"
              alt="Icon-Role"
            />
            <span>Eliminar Usuario</span>
          </div>
        </button>
        <div className="tooltip-configRol">Eliminar Usuario</div>
      </div>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h2>Eliminar Usuario</h2>
              <button className="close-delete-user" onClick={toggleModal}>❌</button>
            </div>
            <div className="modal-body">
              <p>
                Si presiona el botón, eliminará al usuario con email:{" "}
                <b>{mail}</b>.
              </p>
              <BtnSecondary onClick={handleDeleteUser}>Eliminar</BtnSecondary>
              {message && <p>{message}</p>}
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  )
}

export default BtnUserDelete
