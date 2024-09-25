import React from "react"
import "../buttons/buttons.css"

function BtnSecondary({ onClick, children, className }) {
  return (
    <button className={`btnSecondary animationFundido ${className}`} onClick={onClick}>
      <span>{children}</span>
    </button>
  )
}

export default BtnSecondary