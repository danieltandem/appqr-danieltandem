import React, { useState } from "react"
import { Link } from "gatsby"
import "../buttons/buttons.css"
import { StaticImage } from "gatsby-plugin-image"

function BtnProfile() {
  return (
    <Link to="/usuario">
      <button class="btnProfile animationFundido">
        <StaticImage
          className="icon-perfil"
          src="../../images/icons/profile-2.svg"
          alt="Perfil"
        />
      </button>
    </Link>
  )
}
export default BtnProfile
