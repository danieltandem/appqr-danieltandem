import React, { useState } from "react"
import Seo from "../components/seo"
import Halt from "../components/header/halt"
import Footer from "../components/footer/Footer"
import ListQr from "../components/listqr/listqr"
import BtnBack from "../components/buttons/BtnBack"
import BtnUp from "../components/buttons/BtnUp"

function ListaQr() {
  return (
    <>
      <Halt></Halt>
      <ListQr url="https://vigas.tandempatrimonionacional.eu/dani/v1/qr/list-qr-admin.php"></ListQr>
      <BtnBack />
      <BtnUp />
      <Footer></Footer>
    </>
  )
}

export const Head = () => <Seo title="Lista de todos los QRs" />
export default ListaQr
