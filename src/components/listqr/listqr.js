import React, { useState, useEffect, useRef } from "react"
import QRCode from "qrcode.react"
import "./listqr.css"
import Buscador2 from "../buscador/buscador2"
import BtnDownload from "../buttons/BtnDownload"
import { toPng, toJpeg, toSvg } from "html-to-image"
import download from "downloadjs"
import BtnMasInfoLista from "../buttons/BtnMasInfoLista"
import BtnQRDelete from "../buttons/BtnDeleteQR"
import BtnNuevoQr from "../buttons/BtnNuevoQr"

const ListQr = ({ url }) => {
  const [qrs, setQrs] = useState([])
  const [filteredQrs, setFilteredQrs] = useState([])
  const [message, setMessage] = useState("")
  const qrRefs = useRef({})

  useEffect(() => {
    const fetchQrs = async () => {
      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        setQrs(data.qrs)
        setFilteredQrs(data.qrs)
        setMessage(data.message)
      } catch (error) {
        console.error("Error al buscar la lista de usuarios", error)
      }
    }
    fetchQrs()
  }, [url])

  const deleteQR = qrName => {
    setQrs(prevQrs => prevQrs.filter(qr => qr.qr_name_qr !== qrName))
    setFilteredQrs(prevFilteredQrs =>
      prevFilteredQrs.filter(qr => qr.qr_name_qr !== qrName)
    )
  }

  const handleDownload = async (format, qr) => {
    const qrElement = qrRefs.current[qr.qr_id]
    if (qrElement) {
      let dataUrl
      switch (format) {
        case "png":
          dataUrl = await toPng(qrElement)
          break
        case "jpeg":
          dataUrl = await toJpeg(qrElement)
          break
        case "svg":
          dataUrl = await toSvg(qrElement)
          break
        default:
          return
      }
      download(dataUrl, `${qr.qr_name_qr}.${format}`)
    }
  }

  const handleSearch = query => {
    if (query === "") {
      setFilteredQrs(qrs)
    } else {
      const filtered = qrs.filter(qr =>
        qr.qr_name_qr.toLowerCase().includes(query.toLowerCase())
      )
      setFilteredQrs(filtered)
    }
  }

  return (
    <>
      <h1 className="h1Qr">{message}</h1>
      <BtnNuevoQr></BtnNuevoQr>
      <Buscador2 onSearch={handleSearch} />
      <div className="listado-qr">
        {filteredQrs.map(qr => (
          <div key={qr.qr_id} className="tarjeta-qr">
            <div ref={el => (qrRefs.current[qr.qr_id] = el)}>
              <QRCode
                value={qr.qr_description}
                fgColor={qr.qr_color_qr}
                className="qrimg"
              />
            </div>
            <BtnMasInfoLista qrName={qr.qr_name_qr} />
            <p>{qr.qr_name_qr}</p>
            <BtnDownload qr={qr} handleDownload={handleDownload} />
            <BtnQRDelete qrName={qr.qr_name_qr} deleteQR={deleteQR} />
          </div>
        ))}
      </div>
    </>
  )
}

export default ListQr
