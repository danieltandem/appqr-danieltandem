import React from "react"
import "./buttons.css"

function BtnTertiary({ onClick, children }) {
  return (
    <button className="btnTertiary animationFundido" onClick={onClick}>
      <span>{children}</span>
    </button>
  )
}

export default BtnTertiary