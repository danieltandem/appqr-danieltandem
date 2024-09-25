import React, { useState } from "react"
import { useFormik } from "formik"
import "./Help-form.css"

const HelpForm = () => {
  const [isVisible, setIsVisible] = useState(true)

  const formik = useFormik({
    initialValues: {
      emailhelp: "",
      mensaje: "",
    },
    onSubmit: async values => {
      const response = await fetch("https://vigas.tandempatrimonionacional.eu/vigas/v1/user/soporte.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: values.emailhelp,
          mensaje: values.mensaje,
        }),
      })

      const data = await response.json()
      alert(data.message)
      setIsVisible(false) 
    },
  })

  if (!isVisible) return null // No renderiza na si el formulario esta cerrado

  return (
    <div className="helpform-container">
      <form className="helpform" onSubmit={formik.handleSubmit}>
        <div className="helpform-group">
          <label htmlFor="email">Tu correo electrónico:</label>
          <input
            type="text"
            className="helpforminput"
            id="emailhelp"
            name="emailhelp"
            placeholder="MiUsuario@example.com"
            onChange={formik.handleChange}
            value={formik.values.emailhelp}
            required
          />
        </div>
        <div className="helpform-group">
          <label className="helpformlabel" htmlFor="textarea">
            Mensaje:
          </label>
          <textarea
            className="helpformtextarea"
            name="mensaje"
            id="textarea"
            rows="10"
            cols="50"
            onChange={formik.handleChange}
            value={formik.values.mensaje}
            required
          />
        </div>
        <button className="helpform-submit-btn" type="submit">
          Enviar
        </button>
      </form>
    </div>
  )
}

export default HelpForm
