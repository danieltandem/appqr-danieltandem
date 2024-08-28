import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "./header.css"
import "../layout.css"
import { Link } from "gatsby"
const Halt2 = () => (
  <div className="halt2">
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
      <div className="text-wrapper">
        |&nbsp;&nbsp;&nbsp;
        <Link to="/">
          <a className="styledLink subrayar">INICIO</a>
        </Link>
        &nbsp;&nbsp;&nbsp;|&nbsp;
      </div>
    </div>
  </div>
)
export default Halt2
