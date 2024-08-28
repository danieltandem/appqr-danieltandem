import React from "react"
import "./layout.css"
import Cargaimg from "../images/carga.gif"

const Loader = () => {
  return (
    <div className="loader-container">
      <img src={Cargaimg} alt="Loading..." className="loader" />
    </div>
  )
}

export default Loader
