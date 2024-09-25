import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import HelpForm from "../helpform/Helpform"
import "../buttons/buttons.css"

function BtnSupport({className}) {
  const [showForm, setShowForm] = useState(false)

  const handleSupportClick = () => {
    setShowForm(!showForm)
  }

  return (
    <div>
      <button
        className={`btnSubmit animationFundido ${className}`}
        onClick={handleSupportClick}
      >
        <StaticImage
          className="profile-2"
          src="../../images/icons/soporte.png"
          alt="Soporte"
        />
      </button>
      {showForm && <HelpForm />}
    </div>
  )
}

export default BtnSupport
