import React, { useState, useRef, useEffect } from "react"
import { Link } from "gatsby"
import Seo from "../components/seo"
import Halt from "../components/header/halt"
import MyComponent from "../components/comp/comp"
import QRCode from "qrcode.react"
import { toPng, toJpeg, toSvg } from "html-to-image"
import download from "downloadjs"
import "../components/css-pages/crearqr.css"
import Desplegable from "../components/desplegable/Desplegable"
import Footer from "../components/footer/Footer"
import BtnSave from "../components/buttons/BtnSave"
import BtnDownload from "../components/buttons/BtnDownload"
import BtnUp from "../components/buttons/BtnUp"
import BtnInfo from "../components/buttons/BtnInfo"
import MapComponent from "../components/mapa/mapa"
import BtnBack from "../components/buttons/BtnBack"
import BtnSecondary from "../components/buttons/BtnSecondary"
import BtnAcceso from "../components/buttons/btnAcceso"

function Crearqr() {
  const [qrColor, setQrColor] = useState("black")
  const [qrSize, setQrSize] = useState(100)
  const [qrName, setQrName] = useState("")
  const [selectedFile, setSelectedFile] = useState(null)
  const qrRef = useRef(null)
  const [selectedOption, setSelectedOption] = useState("")
  const [inputValue, setInputValue] = useState("")
  const [displayValue, setDisplayValue] = useState("")
  const [showBtnSecondary, setShowBtnSecondary] = useState(false)
  const [userName, setUserName] = useState("")
  const [role, setRole] = useState("null")
  const [createdBy, setCreatedBy] = useState(null)

  const handleColorChange = color => {
    setQrColor(color)
  }

  const handleSizeChange = size => {
    setQrSize(parseInt(size, 10))
  }

  const handleFileChange = event => {
    setSelectedFile(event.target.files[0])
  }

  const handleDownload = async format => {
    if (qrRef.current) {
      let dataUrl
      if (format === "png") {
        dataUrl = await toPng(qrRef.current)
      } else if (format === "jpeg") {
        dataUrl = await toJpeg(qrRef.current)
      } else if (format === "svg") {
        dataUrl = await toSvg(qrRef.current)
      }
      download(dataUrl, `${qrName}.${format}`)
      setShowBtnSecondary(true)
    }
  }

  const colorOptions = [
    "black",
    "blue",
    "red",
    "green",
    "yellow",
    "purple",
    "orange",
    "pink",
    "magenta",
  ]

  const options = [
    { value: "default", label: "Selecciona el contenido", disabled: true },
    { value: "url", label: "URL", disabled: false },
    { value: "geolocation", label: "Geolocalización", disabled: false },
    { value: "text", label: "Texto Explicativo", disabled: false },
  ]

  const handleInputChange = event => {
    setInputValue(event.target.value)
  }

  const opcion = event => {
    setSelectedOption(event.target.value)
    setInputValue("")
    console.log("Selected:", event.target.value)
  }

  const handleLocationSelect = latlng => {
    const mapsUrl = `https://www.google.com/maps?q=${latlng.lat},${latlng.lng}`
    setInputValue(mapsUrl)
    setDisplayValue(`${latlng.lat}, ${latlng.lng}`)
  }

  let inputType = "textarea"
  let inputPlaceholder = "Introduce tu texto o url aquí:"
  let inputPattern = ""

  switch (selectedOption) {
    case "url":
      inputType = "url"
      inputPlaceholder = "Introduce la URL aquí:"
      inputPattern = "https?://.*"
      break
    case "geolocation":
      inputType = "hidden"
      inputPlaceholder = "Selecciona un punto en el mapa:"
      inputPattern = "^(-?\\d+(\\.\\d+)?),\\s*(-?\\d+(\\.\\d+)?)$"
      break
    case "text":
      inputType = "text"
      inputPlaceholder = "Introduce el texto aquí:"
      inputPattern = ""
      break
    default:
      inputType = "text"
      inputPlaceholder = "Introduce tu texto o url aquí:"
      inputPattern = ""
  }

  useEffect(() => {
    const storedUserName = localStorage.getItem("userName")
    const storedUserId = localStorage.getItem("userId")
    setRole(localStorage.getItem("userRole"))
    if (storedUserName) {
      setUserName(storedUserName)
    }
    if (storedUserId) {
      setCreatedBy(storedUserId)
    }
  }, [])

  if (!role) {
    return (
      <>
        <Halt></Halt>
        <h1>Debe registrarse para poder ver el contenido de esta página.</h1>
        <h3>Esta aplicación requiere de autentificación.</h3>
        <p>Puede registrarse presionando el siguiente botón:</p>
        <BtnAcceso></BtnAcceso>
        <Footer></Footer>
      </>
    )
  }

  return (
    <>
      <Halt />
      <div className="container">
        <section className="layout">
          <div className="contenido">
            <div className="patata">
              <div className="flex-container">
                <BtnInfo className="info ambos" />
                <h2 className="ambos h2h2 osc">CONTENIDO DEL QR:</h2>
              </div>
              <label htmlFor="nombreQR">Introduce el nombre de tu QR</label>
              <textarea
                className="txtNameQr"
                type="text"
                id="nombreQR"
                placeholder="Introduce el nombre del QR"
                onChange={e => setQrName(e.target.value)}
              />
              <label className="elige-contenido">Elija el tipo de Contenido:</label>
              <Desplegable options={options} onChange={opcion} />
              <label htmlFor="tipo">{inputPlaceholder}</label>
              {selectedOption === "geolocation" ? (
                <div className="mapa">
                  <MapComponent onLocationSelect={handleLocationSelect} />
                </div>
              ) : (
                <textarea
                  id="tipo"
                  type={inputType}
                  value={inputValue}
                  onChange={handleInputChange}
                  pattern={inputPattern}
                />
              )}
            </div>
            <div className="personalizar">
              <h2 className="osc">PERSONALIZAR QR:</h2>
              <MyComponent
                onColorChange={handleColorChange}
                onSizeChange={handleSizeChange}
                colorOptions={colorOptions}
              />
            </div>
          </div>
          <div className="visualizacion">
            <h2 className="osc">VISUALIZACIÓN QR:</h2>
            <div className="qr-contenido">
              <div ref={qrRef}>
                <QRCode
                  value={inputValue}
                  size={qrSize}
                  fgColor={qrColor}
                  className="qrimg"
                />
              </div>
              <br />
              <p className="name osc">
                Nombre del QR:
                <br /> {qrName}
              </p>
              <br />
              <div className="contenido2">
                <p className="osc">Contenido del QR:</p>
                <p>
                  {selectedOption === "geolocation" ? displayValue : inputValue}
                </p>
                <br />
              </div>
              <BtnSave
                qrName={qrName}
                qrColor={qrColor}
                qrSize={qrSize}
                qrValue={inputValue}
                createdBy={createdBy}
                onSave={() => setShowBtnSecondary(true)}
              />
              <br />
              <BtnDownload handleDownload={format => handleDownload(format)} />
              <br />
              {showBtnSecondary && (
                <Link to="/appsite">
                  <BtnSecondary>Volver al inicio</BtnSecondary>
                </Link>
              )}
            </div>
          </div>
        </section>
        <br />
        <br />
      </div>
      <BtnUp />
      <BtnBack />
      <Footer />
    </>
  )
}

export const Head = () => <Seo title="Crear Qr" />
export default Crearqr
