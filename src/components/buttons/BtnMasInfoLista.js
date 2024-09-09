import React, { useState, useRef, useEffect } from "react"
import "../buttons/buttons.css"
import BtnClose from "./BtnClose"
import "../modals/modal.css"

function BtnMasInfoLista({ qrName }) {
  const [isOpen, setIsOpen] = useState(false)
  const [qrs, setQrs] = useState(null)
  const modalRef = useRef(null)

  const handleClickOutside = event => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setIsOpen(false)
    }
  }

  const handleKeyDown = event => {
    if (event.key === "Escape" && isOpen) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)
    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen])

  const toggleModal = () => {
    setIsOpen(!isOpen)
    if (!isOpen) {
      fetchQrs()
    }
  }

  const fetchQrs = () => {
    console.log("Fetching data for QR name:", qrName) // Añadido para depuración
    fetch("https://vigas.tandempatrimonionacional.eu/andres/v1/qr/info-qr.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name_qr: qrName }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        return response.json()
      })
      .then(data => {
        console.log("Received data:", data) // Añadido para depuración
        setQrs(data) // Cambiado para guardar todo el objeto recibido
      })
      .catch(error => {
        console.error("Error fetching QR info:", error)
        setQrs(null)
      })
  }

  return (
    <React.Fragment>
      <button className="btnMasInfo animationFundido" onClick={toggleModal}>
        <p className="pMasInfo">+ Info</p>
      </button>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal animationFundido" ref={modalRef}>
            <div className="modal-header">
              <h2>Más Información</h2>
              <BtnClose onClick={toggleModal} />
            </div>
            <div className="modal-body">
              {qrs ? (
                <div>
                  <p>ID: {qrs.id}</p>
                  <p>Nombre QR: {qrs.name_qr}</p>
                  <p>Color QR: {qrs.color_qr}</p>
                  <p>Descripción: {qrs.description}</p>
                  <p>Creado por: {qrs.created_by}</p>
                  <p>Fecha de creación: {qrs.created_at}</p>
                </div>
              ) : (
                <p>No se encontraron datos o hubo un error.</p>
              )}
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  )
}

export default BtnMasInfoLista
