import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "./footer.css"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <div className="footer-escritorio">
      <div className="thumbnail-TANDEM animationFundido">
        <StaticImage
          alt="Thumbnail TANDEM"
          src="../../images/thumbnail-TANDEM1.png"
        />
        <StaticImage
          alt="Thumbnail TANDEM"
          src="../../images/thumbnail-TANDEM2.png"
        />
      </div>
      <i>
        <div className="logotipo animationFundido" />
      </i>
      <div className="redes-sociales animationFundido">
        <a
          href="https://es.linkedin.com/company/patrimonionacional"
          rel="noopener noreferrer"
          target="_blank"
          className="tooltip-container"
        >
          <StaticImage
            className="imgTT"
            alt="LinkedIn"
            src="../../images/icons/linkedin.png"
            width={80}
          />
          <div className="tooltip1">LinkedIn</div>
        </a>
        <a
          href="https://x.com/PatrimNacional"
          rel="noopener noreferrer"
          target="_blank"
          className="tooltip-container"
        >
          <StaticImage
            className="imgT"
            alt="Twitter"
            src="../../images/icons/twitter.png"
            width={70}
          />
          <div className="tooltip2">X</div>
        </a>
        <a
          href="https://www.instagram.com/patrimnacional/?hl=es"
          rel="noopener noreferrer"
          target="_blank"
          className="tooltip-container"
        >
          <StaticImage
            className="imgI"
            alt="Inst"
            src="../../images/icons/insta.png"
            width={80}
          />
          <div className="tooltip3">Instagram</div>
        </a>
        <a
          href="https://www.youtube.com/@patrimnacional"
          rel="noopener noreferrer"
          target="_blank"
          className="tooltip-container"
        >
          <StaticImage
            className="imgY"
            alt="Youtube"
            src="../../images/icons/youtube.png"
            width={70}
          />
          <div className="tooltip4">YouTube</div>
        </a>
      </div>
      <div className="accesos-legales animationFundido">
        <div className="text-wrapper">
          |&nbsp;&nbsp;
          <Link to="/accesibilidad" target="_blank" className="subrayar">
            Accesibilidad
          </Link>
          &nbsp;&nbsp;&nbsp;|&nbsp;
        </div>
        <div className="text-wrapper">
          <Link to="/avisolegal" target="_blank" className="subrayar">
            Aviso Legal
          </Link>
          &nbsp;&nbsp;|&nbsp;
        </div>
        <div className="text-wrapper">
          <Link to="/avisoprivacidad" target="_blank" className="subrayar">
            Aviso Privacidad
          </Link>
          &nbsp;&nbsp;|&nbsp;
        </div>
        <div className="text-wrapper">
          <Link to="/cookies" target="_blank" className="subrayar">
            Cookies
          </Link>
          &nbsp;&nbsp;|&nbsp;
        </div>
      </div>
    </div>
  )
}

export default Footer
