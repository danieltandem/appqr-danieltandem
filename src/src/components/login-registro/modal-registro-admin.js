import React, { useState, useEffect } from "react"
import BtnPrimary from "../buttons/BtnPrimary"
import "./accesoregistro.css"

const ModalForm = ({ closeModal }) => {
  // Recibes closeModal como prop
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [message, setMessage] = useState("")

  const handleName = e => setName(e.target.value)
  const handleEmail = e => setEmail(e.target.value)
  const handlePassword = e => setPassword(e.target.value)
  const handleConfirmPassword = e => setConfirmPassword(e.target.value)

  const handleRegistro = async e => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage("Las contraseñas no coinciden")
      return
    }
    try {
      const response = await fetch(
        "https://vigas.tandempatrimonionacional.eu/vigas/v1/user/register.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, password }),
        }
      )
      const data = await response.json()
      setMessage(data.message)
    } catch (error) {
      console.error("Error registrando usuario", error)
      setMessage("Error en el registro")
    }
  }

  const [stylesValidation, setStylesValidation] = useState({
    length: "",
    number: "",
    special: "",
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)

  const capital = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ".split("")
  const numbers = "123456789".split("")
  const special = "&@$%+#/*".split("")

  const stylGreen = {
    backgroundColor: "rgba(102,255,102,0.2)",
    borderColor: "rgb(102,255,102)",
    color: "lightgreen",
  }
  const stylRed = {
    backgroundColor: "rgba(231,76,60,0.2)",
    borderColor: "#E74C3C",
    color: "#FF3F34",
  }

  useEffect(() => {
    const validatePassword = () => {
      let lengthStyle = password.length >= 8 ? stylGreen : stylRed
      let numberStyle = numbers.some(char => password.includes(char))
        ? stylGreen
        : stylRed
      let specialStyle = special.some(char => password.includes(char))
        ? stylGreen
        : stylRed
      setStylesValidation({
        length: lengthStyle,
        number: numberStyle,
        special: specialStyle,
      })
    }
    validatePassword()
  }, [password])

  const toggleShowPassword = () => {
    setShowPassword(prevShowPassword => !prevShowPassword)
  }

  const handleInputFocus = () => {
    setShowDropdown(true)
  }

  const handleInputBlur = () => {
    setShowDropdown(false)
  }

  return (
    <div className="modal-container">
      <div className="modal-content">
        <button className="close-modal-add-user" onClick={closeModal}>
          ❌
        </button>
        <h1 className="tittle-modal-add-user">Nuevo usuario</h1>
        <form
          className="register-form"
          id="register-form-modal"
          onSubmit={handleRegistro}
        >
          <div className="field-group" id="register-field-group">
            <div className="name-input-container">
              <label className="label-add-user" htmlFor="name">
                Nombre completo
              </label>
              <input
                className="input-register-add-user"
                name="name"
                type="text"
                placeholder="Introduce tu nombre"
                id="Name"
                value={name}
                onChange={handleName}
                required
              />
            </div>
            <div className="email-input-container">
              <label className="label-add-user" htmlFor="email">
                Correo electrónico
              </label>
              <input
                className="input-register-add-user"
                name="email"
                type="email"
                placeholder="Introduce tu email"
                id="email"
                value={email}
                onChange={handleEmail}
                required
              />
            </div>
          </div>
          <div className="field-group">
            <div className="password-modal-register">
              <label className="label-add-user" htmlFor="password">
                Contraseña
              </label>
              <div
                className="password-input-container"
                style={{ position: "relative" }}
              >
                <input
                  className="input-register-add-user"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Introduce tu Contraseña"
                  id="password"
                  value={password}
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                  onChange={handlePassword}
                  required
                />
                <button
                  type="button"
                  id="eye-register-login"
                  className="toggle-password-button-add-user"
                  onClick={toggleShowPassword}
                >
                  {showPassword ? "👁️" : "👁️‍🗨️"}
                </button>
              </div>
              {showDropdown && (
                <div id="validacion-contraseña-add-user">
                  <span style={stylesValidation.length}>
                    <br />
                    Mínimo 8 caracteres
                  </span>
                  <span style={stylesValidation.number}>
                    <br />
                    Debe contener un número
                  </span>
                  <span style={stylesValidation.special}>
                    <br />
                    Debe contener un carácter especial
                  </span>
                </div>
              )}
            </div>
            <div className="confirm-password-modal-register">
              <label className="label-add-user" htmlFor="confirmPassword">
                Confirmar contraseña
              </label>
              <div
                className="password-input-container"
                style={{ position: "relative" }}
              >
                <input
                  className="input-register-add-user"
                  name="confirmPassword"
                  type={showPassword ? "text" : "password"}
                  placeholder="Confirma tu contraseña"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={handleConfirmPassword}
                  required
                />
                <button
                  type="button"
                  id="eye-register-login"
                  className="toggle-password-button-add-user-2"
                  onClick={toggleShowPassword}
                >
                  {showPassword ? "👁️" : "👁️‍🗨️"}
                </button>
              </div>
            </div>
          </div>
          <BtnPrimary className="btnregistromodal">Registrate</BtnPrimary>
          <p>{message}</p>
        </form>
      </div>
    </div>
  )
}

export default ModalForm
