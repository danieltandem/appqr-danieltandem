import React from "react"
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