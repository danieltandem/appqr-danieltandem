import React, { useState } from "react"
import Seo from "../components/seo"
import Halt from "../components/header/halt"
import Footer from "../components/footer/Footer"
import ListQr from "../components/listqr/listqr"
import BtnBack from "../components/buttons/BtnBack"

function ListaQr() {
  return (
    <>
      <Halt></Halt>
      <ListQr url="http://localhost/bd-appqr/v1/qr/list-qr-admin.php"></ListQr>
      <BtnBack></BtnBack>
      <Footer></Footer>
    </>
  )
}

export const Head = () => <Seo title="Lista de todos los QRs" />
export default ListaQr
