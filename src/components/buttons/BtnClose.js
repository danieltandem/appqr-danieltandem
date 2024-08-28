import React from "react"
import "../buttons/buttons.css"

function BtnClose({ onClick }) {
  return (
    <button className="btnClose animationFundido" onClick={onClick}>
      <span>❌</span>
    </button>
  )
}

export default BtnClose