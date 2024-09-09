import React, { useState, useEffect } from "react"
import { StaticImage } from "gatsby-plugin-image"
import "../buttons/buttons.css"

function BtnUp({ onClick }) {
  const [isVisible, setIsVisible] = useState(false)

  // Mostrar el botón cuando se desplaza hacia abajo
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 50) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)

    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      {isVisible && (
        <button className="btnUp animationFundido" onClick={scrollToTop}>
          <StaticImage
            className="icon-Up"
            src="../../images/icons/icon-Up.png"
            alt="Subir"
          ></StaticImage>
        </button>
      )}
    </>
  )
}

export default BtnUp