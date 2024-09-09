import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "../buttons/buttons.css"

function BtnSubmit() {
  return (
<button className="btnSubmit animationFundido" onClick={onClick}>
      <StaticImage
        className="profile-2"
        src="../../images/icons/profile-2.svg"
        alt="profile-2"
      ></StaticImage>
      <span>Entrar</span>
    </button>
  )
}

export default BtnSubmit
