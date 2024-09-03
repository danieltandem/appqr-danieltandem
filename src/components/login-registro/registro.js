import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Cuadrado from "../Cuadrado/cuadrado";
import ContactLink from "../modals/modalregistro/contactlink";

const RegisterForm = ({ register }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [submitAttempted, setSubmitAttempted] = useState(false); // Nuevo estado para verificar si se intentó enviar

  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  async function handleRegistro(values, actions) {
    setSubmitAttempted(true); // Marcar que se ha intentado enviar el formulario

    try {
      const url = 'https://danieltandem.tandempatrimonionacional.eu/bdappqr/v1/user/register.php';
      const datos = {
        nombre: values.name,
        email: values.email,
        password: values.password,
      };
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
      });
      if (!response.ok) {
        throw new Error(`Error registrando usuario: ${response.status}`);
      }
      const respuesta = await response.json();
      console.log('Usuario registrado con éxito:', respuesta);
      setMessage('Usuario registrado con éxito');
      actions.resetForm(); // Resetear el formulario después del envío exitoso
    } catch (error) {
      console.error('Error registrando usuario:', error);
      setMessage(error.message);
    }
  }

  const [styles, setStyles] = useState({
    length: "",
    number: "",
    special: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const capital = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ".split("");
  const numbers = "123456789".split("");
  const special = "&@$%+#/*".split("");

  const stylGreen = {
    background: "rgba(102,255,102,0.2)",
    borderColor: "rgb(102,255,102)",
    color: "lightgreen",
  };

  const stylRed = {
    background: "rgba(231,76,60,0.2)",
    borderColor: "#e74c3c",
    color: "#ff3f34",
  };

  useEffect(() => {
    const validatePassword = () => {
      let lengthStyle = password.length >= 8 ? stylGreen : stylRed;
      let numberStyle = numbers.some((char) => password.includes(char))
        ? stylGreen
        : stylRed;
      let specialStyle = special.some((char) => password.includes(char))
        ? stylGreen
        : stylRed;

      setStyles({
        length: lengthStyle,
        number: numberStyle,
        special: specialStyle,
      });
    };
    validatePassword();
  }, [password]);

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword((prevShowConfirmPassword) => !prevShowConfirmPassword);
  };

  const handleInputFocus = () => {
    setShowDropdown(true);
  };

  const handleInputBlur = () => {
    setShowDropdown(false);
  };

  return (
    <div className="form-register">
      <h1>Nuevo usuario</h1>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(3, "Must be at least 3 characters")
            .required("Campo obligatorio"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Campo obligatorio"),
          password: Yup.string().required("Campo obligatorio"),
          confirmPassword: Yup.string()
            .oneOf([Yup.ref("password"), null], "Las contraseñas no coinciden")
            .required("Campo obligatorio"),
        })}
        validateOnChange={false} // Desactivar validación en cambio
        validateOnBlur={false}   // Desactivar validación en desenfoque
        onSubmit={handleRegistro}
      >
        {({ setFieldValue, touched, errors, handleSubmit }) => (
          <Form className="register-form">
            <div className="field-group">
              <div className="name-input-container">
                <label htmlFor="name" className="label-register">Nombre completo</label>
                <Field
                  className="input-registerr"
                  name="name"
                  type="text"
                  placeholder="Introduce tu nombre"
                  id="Name"
                  value={name}
                  onChange={(e) => {
                    handleName(e);
                    setFieldValue("name", e.target.value);
                  }}
                />
                {submitAttempted && touched.name && errors.name && (
                  <div className="error-message">{errors.name}</div>
                )}
              </div>
              <div className="email-input-container">
                <label htmlFor="email" className="label-register">Correo electrónico</label>
                <Field
                  className="input-registerr"
                  name="email"
                  type="email"
                  placeholder="Introduce tu email"
                  id="email"
                  value={email}
                  onChange={(e) => {
                    handleEmail(e);
                    setFieldValue("email", e.target.value);
                  }}
                />
                {submitAttempted && touched.email && errors.email && (
                  <div className="error-message">{errors.email}</div>
                )}
              </div>
            </div>

            <div className="field-group">
              <div>
                <label htmlFor="password" className="label-register">Contraseña</label>
                <div className="password-input-container">
                  <Field
                    className="input-registerr"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Introduce tu Contraseña"
                    id="password"
                    value={password}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setFieldValue("password", e.target.value);
                      handlePassword(e);
                    }}
                  />
                  <button
                    type="button"
                    id="eye-input-register"
                    className="toggle-password-button"
                    onClick={toggleShowPassword}
                  >
                    {showPassword ? "👁️​" : "👁️‍🗨️"}
                  </button>
                </div>
                {showDropdown && (
                  <div id="validacion-contraseña">
                    <span
                      style={{
                        ...styles.length,
                        display: "block",
                        padding: "5px",
                        color: "#4f4e4e",
                        fontWeight: "bold",
                      }}
                    >
                      Mínimo 8 caracteres
                    </span>
                    <span
                      style={{
                        ...styles.number,
                        display: "block",
                        padding: "5px",
                        color: "#4f4e4e",
                        fontWeight: "bold",
                      }}
                    >
                      Mínimo debe contener un número
                    </span>
                    <span
                      style={{
                        ...styles.special,
                        display: "block",
                        padding: "5px",
                        color: "#4f4e4e",
                        fontWeight: "bold",
                      }}
                    >
                      Mínimo debe contener un carácter especial
                    </span>
                  </div>
                )}
                {submitAttempted && touched.password && errors.password && (
                  <div className="error-message">{errors.password}</div>
                )}
              </div>
              <div className="confirmPassword-input-container">
                <label htmlFor="confirmPassword" className="label-register">Confirmar contraseña</label>
                <div className="password-input-container">
                  <Field
                    className="input-registerr"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Repite tu contraseña"
                  />
                  <button
                    type="button"
                    id="eye-input-register-2"
                    className="toggle-password-button"
                    onClick={toggleShowConfirmPassword}
                  >
                    {showConfirmPassword ? "👁️​" : "👁️‍🗨️"}
                  </button>
                </div>
              </div>
              <br></br>
              {submitAttempted && touched.confirmPassword && errors.confirmPassword && (
                <div className="error-message-brook">{errors.confirmPassword}</div>
              )}
            </div>

            <br />
            <br />

            <Cuadrado />

            <br />

            <ContactLink />

            <br />

            <button
              type="submit"
              id="btn-enviar-registro"
              onClick={() => {
                setSubmitAttempted(true);
                handleSubmit();
              }}
            >
              Enviar
            </button>
            {message && <p>{message}</p>}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterForm;