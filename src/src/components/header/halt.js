import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "./header.css"
import BtnExit from "../buttons/BtnExit"
import Oscuro from "../oscuro/oscuro"

const Halt = () => {
  return (
    <div className="halt2 hosc" id="myHeader">
      <Link to="/appsite">
        <StaticImage
          src="../../images/icons/logogeneradorqr.png"
          alt="patrimonio"
          width={350}
          height={80}
          className="imagen"
        />
      </Link>
      <div className="menu-cabecera-halt">
        <Oscuro></Oscuro> <BtnExit></BtnExit>
      </div>
    </div>
  )
}

export default Halt
