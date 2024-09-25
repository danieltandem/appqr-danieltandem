import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import "../buttons/buttons.css"
import BtnSecondary from "./BtnSecondary"

function BtnQRDelete({ qrName, deleteQR }) {
  const [isOpen, setIsOpen] = useState(false)
  const [qr] = useState(qrName)
  const [message, setMessage] = useState("")

  const toggleModal = () => {
    setIsOpen(!isOpen)
  }

  const handleDeleteQR = async () => {
    console.log("Valor de qr:", qr) // Verificar el valor de qr

    if (!qr) {
      console.error("Error: No se puede eliminar, 'qr' es requerido.")
      setMessage("Error: El QR a eliminar no está definido.")
      return // Detener la ejecución si qr no es válido
    }

    try {
      console.log("Iniciando petición para eliminar QR", qr)

      const response = await fetch(
        "https://vigas.tandempatrimonionacional.eu/vigas/v1/qr/delete-qr.php",
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name_qr: qr }), // Asegúrate de que "qr" contiene el valor correcto
        }
      )

      const textResponse = await response.text()
      console.log("Respuesta recibida:", textResponse)

      try {
        const data = JSON.parse(textResponse)
        if (response.ok) {
          console.log("Datos recibidos:", data)
          setMessage(data.message)
          deleteQR(qr) // Eliminar el QR de la lista en la página
        } else {
          console.error("Error en la respuesta del servidor:", data)
          setMessage(`Error en la respuesta del servidor: ${data.message}`)
        }
      } catch (e) {
        console.error("Error al parsear la respuesta:", e)
        setMessage(`Error inesperado: ${textResponse}`)
      }
    } catch (error) {
      console.error("Error en la petición:", error)
      setMessage(`Error al eliminar el QR: ${error.message}`)
    }
  }

  return (
    <React.Fragment>
      <div className="tooltip-container-configRol">
        <button
          className={`btnQRDelete animationFundido`}
          onClick={toggleModal}
        >
          <div className="icon-role-container">
            <StaticImage
              className="icon-basura"
              src="../../images/icons/borrar.png"
              alt="Icon-borrar"
            />
          </div>
        </button>
        <div className="tooltip-configRol">Eliminar QR</div>
      </div>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h2>Eliminar QR</h2>
              <button className="close-delete-qr" onClick={toggleModal}>❌</button>
            </div>
            <div className="modal-body">
              <p>Si presiona el botón, se eliminará este QR.</p>
              <BtnSecondary onClick={handleDeleteQR}>Eliminar</BtnSecondary>
              {message && <p>{message}</p>}
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  )
}

export default BtnQRDelete
