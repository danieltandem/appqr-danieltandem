import React from "react"
import Seo from "../components/seo"
import Halt3 from "../components/header/halt3"
import Footer from "../components/footer/Footer"
import "../components/css-pages/cookies.css"
import BtnUp from "../components/buttons/BtnUp"
import BtnBack from "../components/buttons/BtnBack"
const Cookies = () => (
  <>
    <Halt3></Halt3>
    <div className="cookies-container">
      <h1 className="sosc">Política de Cookies</h1>
      <section>
        <h2 className="sosc">¿Qué son las cookies?</h2>
        <p className="eosc">
          Las cookies son pequeños archivos de texto que se almacenan en tu
          dispositivo cuando visitas un sitio web. Son ampliamente utilizadas
          para hacer que los sitios web funcionen de manera más eficiente y para
          proporcionar información a los propietarios del sitio.
        </p>
      </section>
      <section>
        <h2 className="sosc">¿Cómo usamos las cookies?</h2>
        <p className="eosc">
          Utilizamos cookies para diversos fines, incluyendo:
        </p>
        <ul>
          <li className="eosc">Mejorar la experiencia del usuario.</li>
          <li className="eosc">Analizar el uso del sitio web.</li>
          <li className="eosc">
            Proporcionar funcionalidades de redes sociales.
          </li>
        </ul>
      </section>
      <section>
        <h2 className="sosc">¿Cómo controlar las cookies?</h2>
        <p className="eosc">
          Puedes controlar y/o eliminar las cookies según desees. Para más
          información, visita{" "}
          <a href="https://www.aboutcookies.org/" className="eosc">
            aboutcookies.org
          </a>
          .
        </p>
      </section>
      <section>
        <h2 className="sosc">Aceptación de Cookies</h2>
        <p className="eosc">
          Al clickar en "aceptar" en el mensaje utilizado en nuestra página de
          inicio, permites el uso de cookies de acuerdo con nuestra política de
          cookies.
        </p>
      </section>
      <section>
        <h2 className="sosc">Contacto</h2>
        <p className="eosc">
          Si tienes alguna pregunta sobre nuestra política de cookies, por favor
          contáctanos en{" "}
          <a href="mailto:cookies@tandemaranjuez.com" className="eosc">
            cookies@tandemaranjuez.com
          </a>
          .
        </p>
      </section>
    </div>
    <BtnUp />
    <BtnBack></BtnBack>
    <Footer></Footer>
  </>
)
export const Head = () => <Seo title="Cookies" />
export default Cookies
