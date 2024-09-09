import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "../buttons/buttons.css"

function BtnPrimary({ onClick, children, className }) {
  return (
    <button
      className={`btnPrimary animationFundido ${className}`}
      onClick={onClick}
    >
      <span>{children}</span>
    </button>
  )
}

export default BtnPrimary