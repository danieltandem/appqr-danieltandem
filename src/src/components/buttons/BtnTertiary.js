import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "../buttons/buttons.css"

function BtnTertiary({ onClick, children }) {
  return (
    <button className="btnTertiary animationFundido" onClick={onClick}>
      <span>{children}</span>
    </button>
  )
}

export default BtnTertiary