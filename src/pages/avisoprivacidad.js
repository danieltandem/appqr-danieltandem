// src/pages/avisoprivacidad.js
import React from "react"
import Seo from "../components/seo"
import Halt3 from "../components/header/halt3"
import Footer from "../components/footer/Footer"
import "../components/css-pages/avisoprivacidad.css"
import BtnUp from "../components/buttons/BtnUp"

const Privacidad = () => (
  <>
    <Halt3></Halt3>
    <div className="privacidad-container">
      <h1>Aviso de Privacidad</h1>
      <section>
        <h2>Introducción</h2>
        <p>
          En Tandem Aranjuez, sucursal de Patrimonio Nacional, nos tomamos muy
          en serio la privacidad de nuestros usuarios. Este aviso de privacidad
          explica cómo recopilamos, usamos y protegemos tu información personal.
        </p>
      </section>
      <section>
        <h2>Recopilación de Información</h2>
        <p>
          Recopilamos información personal que nos proporcionas directamente,
          como tu nombre, dirección de correo electrónico y otra información de
          contacto cuando te registras en nuestro sitio web o te comunicas con
          nosotros.
        </p>
      </section>
      <section>
        <h2>Uso de la Información</h2>
        <p>
          Utilizamos la información recopilada para los siguientes propósitos:
        </p>
        <ul>
          <li>Proporcionar y mejorar nuestros servicios.</li>
          <li>Responder a tus preguntas y solicitudes.</li>
          <li>Enviar comunicaciones promocionales y actualizaciones.</li>
          <li>Cumplir con nuestras obligaciones legales y reglamentarias.</li>
        </ul>
      </section>
      <section>
        <h2>Protección de la Información</h2>
        <p>
          Implementamos medidas de seguridad adecuadas para proteger tu
          información personal contra el acceso no autorizado, alteración,
          divulgación o destrucción.
        </p>
      </section>
      <section>
        <h2>Compartición de Información</h2>
        <p>
          No compartimos tu información personal con terceros, excepto en las
          siguientes circunstancias:
        </p>
        <ul>
          <li>Con tu consentimiento explícito.</li>
          <li>Para cumplir con obligaciones legales.</li>
          <li>Para proteger y defender nuestros derechos y propiedad.</li>
        </ul>
      </section>
      <section>
        <h2>Tus Derechos</h2>
        <p>
          Tienes derecho a acceder, corregir, eliminar y oponerte al uso de tu
          información personal. Para ejercer estos derechos, por favor
          contáctanos en{" "}
          <a href="mailto:privacidad@tandemaranjuez.com">
            privacidad@tandemaranjuez.com
          </a>
          .
        </p>
      </section>
      <section>
        <h2>Contacto</h2>
        <p>
          Si tienes alguna pregunta sobre este aviso de privacidad, por favor
          contáctanos en{" "}
          <a href="mailto:privacidad@tandemaranjuez.com">
            privacidad@tandemaranjuez.com
          </a>
          .
        </p>
      </section>
    </div>
    <BtnUp />
    <Footer></Footer>
  </>
)

export const Head = () => <Seo title="Política de privacidad" />
export default Privacidad
