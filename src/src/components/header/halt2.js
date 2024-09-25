import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "./header.css"
import "../layout.css"
import { Link } from "gatsby"
import Oscuro from "../oscuro/oscuro"

const Halt2 = () => (
  <div className="halt2 hosc">
    <Link to="/">
      <StaticImage
        src="../../images/icons/logogeneradorqr.png"
        alt="patrimonio"
        width={350}
        height={80}
        class="imagen"
      />
    </Link>
    <div className="navLinks">
      <Oscuro></Oscuro>
      <div className="text-wrapper">
        |&nbsp;&nbsp;&nbsp;
        <Link to="/" className="styledLink subrayar">
          INICIO
        </Link>
        &nbsp;&nbsp;&nbsp;|&nbsp;
      </div>
    </div>
  </div>
)

export default Halt2
