import React, { useState } from "react";
import Modal from "react-modal";
import "./modal.css";
import BtnPrimary from "../buttons/BtnPrimary";

// Asegúrate de enlazar el modal con el elemento raíz de tu aplicación
Modal.setAppElement('#___gatsby'); // Cambia este selector según el id del elemento raíz de tu aplicación

const FalloContraseña = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        "https://vigas.tandempatrimonionacional.eu/vigas/v1/user/email.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error("Error al enviar correo", error);
      setMessage("Error al enviar correo");
    }
  };

  return (
    <div>
      <a href="#" onClick={openModal}>
        Olvidaste la contraseña
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
          <h2>Recuperación de contraseñas</h2>
          <button onClick={closeModal} className="close-modal-fallo-contraseña">❌</button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="textos">
            <label htmlFor="input1">Email al que enviar la contraseña:</label>
            <input
              id="input1"
              type="email"
              className="inputpass"
              required
              placeholder="Introduce tu correo"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="btnpassenv">
            <BtnPrimary type="submit">Enviar</BtnPrimary>
          </div>
        </form>
        {message && <p>{message}</p>}
      </Modal>
    </div>
  );
};

export default FalloContraseña;