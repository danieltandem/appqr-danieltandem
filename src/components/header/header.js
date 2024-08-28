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
      <div className="menu-icon" onClick={toggleMenu}>
        <div className={`hamburger ${isOpen ? "open" : ""}`}></div>
      </div>
      <div className={`navLinks ${isOpen ? "open" : ""}`}>
        <div className="text-wrapper">
          |&nbsp;&nbsp;&nbsp;
          <Link to="/sobrenosotros">
            <a className="styledLink subrayar animationFundido" href="">
              SOBRE NOSOTROS
            </a>
          </Link>
          &nbsp;&nbsp;&nbsp;|
        </div>
        <BtnShare></BtnShare>
      </div>
    </div>
  )
}

export default HeaderComponent
