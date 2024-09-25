import React from "react"
import Seo from "../components/seo"
import Halt3 from "../components/header/halt3"
import Footer from "../components/footer/Footer"
import "../components/css-pages/avisoprivacidad.css"
import BtnUp from "../components/buttons/BtnUp"
import BtnBack from "../components/buttons/BtnBack"
const Privacidad = () => (
  <>
    <Halt3></Halt3>
    <div className="privacidad-container">
      <h1 className="eosc">Aviso de Privacidad</h1>
      <section>
        <h2 className="sosc">Introducción</h2>
        <p className="eosc">
          En Tandem Aranjuez, sucursal de Patrimonio Nacional, nos tomamos muy
          en serio la privacidad de nuestros usuarios. Este aviso de privacidad
          explica cómo recopilamos, usamos y protegemos tu información personal.
        </p>
      </section>
      <section>
        <h2 className="sosc">Recopilación de Información</h2>
        <p className="eosc">
          Recopilamos información personal que nos proporcionas directamente,
          como tu nombre, dirección de correo electrónico y otra información de
          contacto cuando te registras en nuestro sitio web o te comunicas con
          nosotros.
        </p>
      </section>
      <section>
        <h2 className="sosc">Uso de la Información</h2>
        <p className="eosc">
          Utilizamos la información recopilada para los siguientes propósitos:
        </p>
        <ul>
          <li className="eosc">Proporcionar y mejorar nuestros servicios.</li>
          <li className="eosc">Responder a tus preguntas y solicitudes.</li>
          <li className="eosc">
            Enviar comunicaciones promocionales y actualizaciones.
          </li>
          <li className="eosc">
            Cumplir con nuestras obligaciones legales y reglamentarias.
          </li>
        </ul>
      </section>
      <section>
        <h2 className="sosc">Protección de la Información</h2>
        <p className="eosc">
          Implementamos medidas de seguridad adecuadas para proteger tu
          información personal contra el acceso no autorizado, alteración,
          divulgación o destrucción.
        </p>
      </section>
      <section>
        <h2 className="sosc">Compartición de Información</h2>
        <p className="eosc">
          No compartimos tu información personal con terceros, excepto en las
          siguientes circunstancias:
        </p>
        <ul>
          <li className="eosc">Con tu consentimiento explícito.</li>
          <li className="eosc">Para cumplir con obligaciones legales.</li>
          <li className="eosc">
            Para proteger y defender nuestros derechos y propiedad.
          </li>
        </ul>
      </section>
      <section>
        <h2 className="sosc">Tus Derechos</h2>
        <p className="eosc">
          Tienes derecho a acceder, corregir, eliminar y oponerte al uso de tu
          información personal. Para ejercer estos derechos, por favor
          contáctanos en{" "}
          <a href="mailto:privacidad@tandemaranjuez.com" className="eosc">
            privacidad@tandemaranjuez.com
          </a>
          .
        </p>
      </section>
      <section>
        <h2 className="sosc">Contacto</h2>
        <p className="eosc">
          Si tienes alguna pregunta sobre este aviso de privacidad, por favor
          contáctanos en{" "}
          <a href="mailto:privacidad@tandemaranjuez.com" className="eosc">
            privacidad@tandemaranjuez.com
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
export const Head = () => <Seo title="Política de privacidad" />
export default Privacidad
