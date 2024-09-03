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
  const [submitAttempted, setSubmitAttempted] = useState(false); // Definición del estado

  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  async function handleRegistro(values, actions) {
    setSubmitAttempted(true); // Marcamos que se ha intentado enviar el formulario

    try {
      const url =
        "https://danieltandem.tandempatrimonionacional.eu/bdappqr/v1/user/register.php";
      const datos = {
        nombre: values.name,
        email: values.email,
        password: values.password,
      };
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datos),
      });
      if (!response.ok) {
        throw new Error(`Error registrando usuario: ${response.status}`);
      }
      const respuesta = await response.json();
      console.log("Usuario registrado con éxito:", respuesta);
      setMessage("Usuario registrado con éxito");
      actions.resetForm(); // Reseteamos el formulario tras un envío exitoso
    } catch (error) {
      console.error("Error registrando usuario:", error);
      setMessage(error.message);
    }
  }

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      validationSchema={Yup.object({
        name: Yup.string().required("El nombre es obligatorio"),
        email: Yup.string()
          .email("Dirección de email inválida")
          .required("El email es obligatorio"),
        password: Yup.string()
          .min(8, "La contraseña debe tener al menos 8 caracteres")
          .required("La contraseña es obligatoria"),
      })}
      onSubmit={handleRegistro}
    >
      {({ errors, touched }) => (
        <Form>
          <div>
            <label htmlFor="name">Nombre</label>
            <Field name="name" type="text" onChange={handleName} />
            <ErrorMessage name="name" component="div" />
          </div>

          <div>
            <label htmlFor="email">Correo electrónico</label>
            <Field name="email" type="email" onChange={handleEmail} />
            <ErrorMessage name="email" component="div" />
          </div>

          <div>
            <label htmlFor="password">Contraseña</label>
            <Field name="password" type="password" onChange={handlePassword} />
            <ErrorMessage name="password" component="div" />
          </div>

          <button type="submit">Registrarse</button>

          {message && <p>{message}</p>}
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
