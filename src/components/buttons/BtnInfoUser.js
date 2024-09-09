import React, { useState, useEffect } from "react"
import { StaticImage } from "gatsby-plugin-image"
import "../buttons/buttons.css"
import BtnClose from "./BtnClose"
import "../modals/modal.css"
import "../buttons/buttons.css"

function BtnInfoUser() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleModal = () => {
    setIsOpen(!isOpen)
  }

  // Cerrar modal al hacer clic fuera del modal
  const handleClickOutside = event => {
    if (event.target.classList.contains("modal-overlay")) {
      setIsOpen(false)
    }
  }

  // Cerrar modal al presionar la tecla "Escape"
  const handleEscapeKey = event => {
    if (event.key === "Escape") {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", handleClickOutside)
      document.addEventListener("keydown", handleEscapeKey)
    } else {
      document.removeEventListener("click", handleClickOutside)
      document.removeEventListener("keydown", handleEscapeKey)
    }

    // Cleanup event listeners on unmount
    return () => {
      document.removeEventListener("click", handleClickOutside)
      document.removeEventListener("keydown", handleEscapeKey)
    }
  }, [isOpen])

  return (
    <React.Fragment>
      <button
        className="btnInfo animationFundido fixedbtninfo"
        onClick={toggleModal}
      >
        <StaticImage
          className="icon-info"
          src="../../images/icons/icon-info.png"
          alt="Info User"
        />
      </button>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal animationFundido">
            <div className="modal-header">
              <h2>Funciones de la aplicación</h2>
              <BtnClose onClick={toggleModal} />
            </div>
            <div className="modal-body">
              <h3>
                Accediendo a la página de perfil podrá encontrar funciones
                específicas:
              </h3>
              <br />
              <ul>
                Para todos los usuarios:
                <li>Gestión de cambio de credenciales.</li>
              </ul>
              <ul>
                Para usuarios con derechos de administración:
                <li>Gestión de cambio de credenciales.</li>
                <li>Gestión de usuarios.</li>
              </ul>
              <h3>CREAR QR</h3>
              <br />
              <p>
                Acceso a creación de un código QR nuevo. Dentro podrás encontrar
                diferentes datos que añadir, además de unas instrucciones para
                poder aplicar los datos que necesites.
              </p>
              <h3>LISTA QR</h3>
              <br />
              <p>
                Acceso a un listado de los códigos Qr creados por los usuarios.
                Podrás descargar un Qr creado con interioridad, volver a
                descargar o eliminarlo de la base de datos.
              </p>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  )
}

export default BtnInfoUser
