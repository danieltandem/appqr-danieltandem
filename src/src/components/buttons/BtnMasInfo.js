import React, { useState, useRef, useEffect } from "react"
import "../buttons/buttons.css"
import "../modals/modal.css"

function BtnMasInfo({ mailto }) {
  const [mail] = useState(mailto)
  const [isOpen, setIsOpen] = useState(false)
  const [userInfo, setUserInfo] = useState(null)
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
    if (!isOpen) {
      fetchUserInfo()
    }
  }

  const fetchUserInfo = () => {
    fetch("https://vigas.tandempatrimonionacional.eu/vigas/v1/user/info-user.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: mail }),
    })
      .then(response => response.json())
      .then(data => {
        setUserInfo(data)
      })
      .catch(error => {
        console.error("Error fetching user info:", error)
      })
  }

  return (
    <React.Fragment>
      <button className="btnMasInfo animationFundido" onClick={toggleModal}>
        <p className="pMasInfo">+ Info</p>
      </button>
      {isOpen && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal animationFundido" ref={modalRef}>
            <div className="modal-header">
              <h2>Más Información</h2>
              <button className="close-mas-info-user" onClick={toggleModal}>❌</button>
            </div>
            <div className="modal-body">
              {userInfo ? (
                <div>
                  <p>ID: {userInfo.id}</p>
                  <p>Nombre: {userInfo.name}</p>
                  <p>Email: {userInfo.email}</p>
                  <p>Rol: {userInfo.role}</p>
                  <p>Fecha de creación: {userInfo.created_at}</p>
                </div>
              ) : (
                <p>Cargando...</p>
              )}
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  )
}

export default BtnMasInfo
