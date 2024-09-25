import React, { useState } from "react"
import ModalForm from "../login-registro/modal-registro-admin"
import { StaticImage } from "gatsby-plugin-image"

const BtnAddUser = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const openModal = () => {
    setModalIsOpen(true)
  }

  return (
    <div>
      <button onClick={openModal} className="btnadduserlist">
        <div className="icon-role-container">
          <StaticImage src="../../images/icons/useradd.png" alt="Icon-Role" />
          <span>Agregar Usuario</span>
        </div>
      </button>
      {modalIsOpen && (
        <div className="modal-overlay">
          <div className="modal-container">
            <div className="modal-content">
              <ModalForm />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default BtnAddUser
