import React from "react"
import Seo from "../components/seo"
import Halt3 from "../components/header/halt3"
import Footer from "../components/footer/Footer"
import "../components/css-pages/avisolegal.css"
import BtnUp from "../components/buttons/BtnUp"
import BtnBack from "../components/buttons/BtnBack"
const AvisoLegal = () => (
  <>
    <Halt3></Halt3>
    <div className="legal-container">
      <h1 className="eosc">Aviso Legal</h1>
      <section>
        <h2 className="sosc">Información General</h2>
        <p className="eosc">
          Este sitio web es propiedad de Tandem Aranjuez, una sucursal propiedad
          de Patrimonio Nacional, dedicada a la creación de códigos QR. La
          información y los servicios disponibles en este sitio están sujetos a
          los siguientes términos y condiciones.
        </p>
      </section>
      <section>
        <h2 className="sosc">Condiciones de Uso</h2>
        <p className="eosc">
          Al acceder a este sitio web, aceptas cumplir con estos términos de
          uso. Nos reservamos el derecho de modificar estos términos en
          cualquier momento sin previo aviso.
        </p>
        <ul>
          <li className="eosc">
            El contenido de este sitio web se proporciona "tal cual" y sin
            garantías de ningún tipo.
          </li>
          <li className="eosc">
            No seremos responsables de ningún daño derivado del uso de este
            sitio web.
          </li>
          <li className="eosc">
            El uso de este sitio web es bajo tu propio riesgo.
          </li>
        </ul>
      </section>
      <section>
        <h2 className="sosc">Propiedad Intelectual</h2>
        <p className="eosc">
          Todo el contenido de este sitio web, incluyendo textos, imágenes,
          gráficos y códigos QR, está protegido por derechos de autor y es
          propiedad de Tandem Aranjuez o de sus respectivos propietarios.
        </p>
      </section>
      <section>
        <h2 className="sosc">Protección de Datos</h2>
        <p className="eosc">
          Nos comprometemos a proteger la privacidad de los usuarios de nuestro
          sitio web. Consulta nuestra política de privacidad para obtener más
          información sobre cómo manejamos tus datos personales.
        </p>
      </section>
      <section>
        <h2 className="sosc">Contacto</h2>
        <p className="eosc">
          Si tienes alguna pregunta sobre este aviso legal, por favor
          contáctanos en{" "}
          <a href="mailto:legal@tandemaranjuez.com">legal@tandemaranjuez.com</a>
          .
        </p>
      </section>
    </div>
    <BtnUp />
    <BtnBack></BtnBack>
    <Footer></Footer>
  </>
)
export const Head = () => <Seo title="Aviso legal" />
export default AvisoLegal
