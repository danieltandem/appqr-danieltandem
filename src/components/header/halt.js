import React, { useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image" // Importa StaticImage
import "./header.css"
import BtnExit from "../buttons/BtnExit"

const Halt = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleLogout = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className="halt2" id="myHeader">
      <Link to="/appsite">
        <StaticImage // Usa StaticImage para mostrar la imagen
          src="../../images/icons/logogeneradorqr.png"
          alt="patrimonio"
          width={350}
          height={80}
          className="imagen"
        />
      </Link>
      <div className="menu-cabecera-halt">
        <BtnExit></BtnExit>
        {/* <div className="text-wrapper">|&nbsp;&nbsp;&nbsp;
          <Link to="/">
            <a className="styledLink subrayar">INICIO</a>
          </Link>&nbsp;&nbsp;&nbsp;|&nbsp;
        </div> */}
        {/* <div className="text-wrapper">
          <Link>
            <a className="styledLink subrayar">PERFIL</a>
          </Link>&nbsp;&nbsp;&nbsp;|&nbsp;
        </div>
        <div className="text-wrapper">
          <a onClick={handleLogout} className="styledLink subrayar">CERRAR SESION</a>
        </div> */}
      </div>
      {/* <Modalcs isOpen={isModalOpen} onClose={handleCloseModal} /> */}
    </div>
  )
}

export default Halt
