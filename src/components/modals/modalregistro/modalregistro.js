import React, { useState } from "react";
import Modal from "react-modal";
import "../../modals/modal.css";
import BtnClose from "../../buttons/BtnClose";
import BtnPrimary from "../../buttons/BtnPrimary"

// Asegúrate de enlazar el modal con el elemento raíz de tu aplicación
Modal.setAppElement('#___gatsby'); // Cambia este selector según el id del elemento raíz de tu aplicación

const ModalRegistro = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        "https://vigas.tandempatrimonionacional.eu/ruth/v1/user/soporte.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, mensaje: message }),
        }
      );
      const data = await response.json();
      setResponseMessage(data.message);
    } catch (error) {
      console.error("Error al enviar correo", error);
      setResponseMessage("Error al enviar correo");
    }
  };

  return (
    <div>
      <a href="#" onClick={openModal}>
        ¿Tienes problemas para registrarte? Mandanos un correo aquí
      </a>
      <Modal
        className="content"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
        contentLabel="Introduce el email para enviarte la contraseña"
      >
        <div className="modalHeader">
          <h2>Problemas de Registro</h2>
          <BtnClose onClick={closeModal} className="btnClose" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="textos">
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              className="inputpass"
              required
              placeholder="Introduce tu correo"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="textos">
            <label htmlFor="mensaje">Mensaje:</label>
            <input
              id="mensaje"
              type="text"
              className="inputpass"
              required
              placeholder="Escribe aquí tu mensaje"
              value={message}
              onChange={handleMessageChange}
            />
          </div>
          <div className="btnpassenv">
            <BtnPrimary type="submit">Enviar</BtnPrimary>
          </div>
        </form>
        {responseMessage && <p>{responseMessage}</p>}
      </Modal>
    </div>
  );
};

export default ModalRegistro;