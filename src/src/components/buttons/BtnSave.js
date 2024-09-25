import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import "../buttons/buttons.css"
import "../modals/modal.css"

function BtnSave({ qrName, qrColor, qrValue, createdBy, onSave }) {
  const [message, setMessage] = useState(null)
  const [saved, setSaved] = useState(false)

  const handleSave = () => {
    console.log("Valor de createdBy antes de guardar:", createdBy)

    if (!createdBy) {
      setMessage("Error: El campo 'created_by' es requerido.")
      setSaved(false)
      return
    }

    const qrData = {
      name_qr: qrName,
      description: qrValue,
      color_qr: qrColor,
      created_by: createdBy,
    }

    fetch(
      "https://vigas.tandempatrimonionacional.eu/vigas/v1/qr/save-qr.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(qrData),
      }
    )
      .then(response => {
        if (!response.ok) {
          return response.text().then(text => {
            throw new Error(text)
          })
        }
        return response.json()
      })
      .then(data => {
        setMessage(data.message)
        setSaved(true)
        if (onSave) onSave() // Llamar a la función pasada como prop
      })
      .catch(error => {
        setMessage(`Error al guardar el código QR: ${error.message}`)
        setSaved(false)
      })
  }

  return (
    <React.Fragment>
      <button className="btnSave animationFundido" onClick={handleSave}>
        <StaticImage
          className="icon-save"
          src="../../images/icons/icon-save.png"
          alt="Save"
        />
        <span>Guardar</span>
      </button>
      {message && (
        <div className={`alert ${saved ? "alert-success" : "alert-error"}`}>
          {message}
        </div>
      )}
    </React.Fragment>
  )
}

export default BtnSave