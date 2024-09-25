import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "./header.css"
import "../layout.css"
import { Link } from "gatsby"
import BtnShare from "../buttons/BtnShare"

const HeaderComponent = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      toggleMenu()
    }
  }

  return (
    <div className="header">
      <div>
        <Link to="/">
          <StaticImage
            src="../../images/icons/logogeneradorqr.png"
            alt="patrimonio"
            width={350}
            height={80}
            className="imagen animationFundido"
          />
        </Link>
      </div>
      <div
        className="menu-icon"
        onClick={toggleMenu}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        aria-label="Toggle menu"
      >
        
        <div className={`hamburger ${isOpen ? "open" : ""}`}></div>
      </div>
      <div className={`navLinks ${isOpen ? "open" : ""}`}>
        <div className="text-wrapper">
          |&nbsp;&nbsp;&nbsp;
          <Link to="/sobrenosotros">
            <button className="styledLink subrayar animationFundido nosotros" type="button">
              SOBRE NOSOTROS
            </button>
          </Link>
          &nbsp;&nbsp;&nbsp;|
        </div>
        <BtnShare></BtnShare>
      </div>
    </div>
  )
}

export default HeaderComponent
