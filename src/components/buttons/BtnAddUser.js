import React, { useState } from "react"
import ModalForm from "../login-registro/modal-registro-admin"
import { StaticImage } from "gatsby-plugin-image"
import BtnClose from "./BtnClose"

const BtnAddUser = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const openModal = () => {
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
  }

  return (
    <div>
      <button onClick={openModal}>
        <div className="icon-role-container">
          <StaticImage src="../../images/icons/useradd.png" alt="Icon-Role" />
          <span>Agregar Usuario</span>
        </div>
      </button>
      {modalIsOpen && (
        <div className="modal-overlay">
          <div className="modal-container">
            <div className="modal-content">
              <BtnClose onClick={closeModal}></BtnClose>
              <ModalForm />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default BtnAddUser
