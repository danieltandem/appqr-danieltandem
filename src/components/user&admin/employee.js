import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import "./changedatauser.css"
import BtnPrimary from "../buttons/BtnPrimary"

const Employee = () => {
  const [userName, setUserName] = useState("")
  useEffect(() => {
    const storedUserName = localStorage.getItem("userName")
    if (storedUserName) {
      setUserName(storedUserName)
    }
  }, [])
  return (
      <div>
        <div class="user">
          <p className="namePerfil">Hola, {userName}.</p>
          {/* <BtnPrimary>Ver mis QR</BtnPrimary> */}
          <Link to="/listausuarios">
            <BtnPrimary>Ver usuarios</BtnPrimary>
          </Link>
        </div>
      </div>
  )
}

export default Employee