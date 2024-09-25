import * as React from "react"
import { useState, useEffect } from "react"
import Header from "./header/header"
import Footer from "./footer/Footer"
import Loader from "./Loader"
import "./layout.css"
import CookieConsent from "../components/cookiecon/CookieConsent"

const Layout = ({ children }) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulo la carga y oculto el loader después de 1 segundos
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <>
          <Header />
          <main>{children}</main>
          <CookieConsent/>
          <Footer />
        </>
      )}
    </>
  )
}

export default Layout
