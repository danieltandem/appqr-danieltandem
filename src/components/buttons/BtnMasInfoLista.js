import React, { useState, useRef, useEffect } from "react"
import "./buttons.css"
import BtnClose from "./BtnClose"
import "../modals/modal.css"

function BtnMasInfoLista() {
  const [isOpen, setIsOpen] = useState(false)
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
  }

  return (
    <React.Fragment>
      <button
        className="btnMasInfo animationFundido"
        onClick={toggleModal}
      >
        <p className="pMasInfo">+ Info</p>
      </button>
      {isOpen && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal animationFundido" ref={modalRef}>
            <div className="modal-header">
              <h2> Más Información</h2>
              <BtnClose onClick={toggleModal} />
            </div>
            <div className="modal-body"></div>
          </div>
        </div>
      )}
    </React.Fragment>
  )
}

export default BtnMasInfoLista
