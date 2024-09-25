import React from "react"
import Seo from "../components/seo"
import Halt3 from "../components/header/halt3"
import Footer from "../components/footer/Footer"
import "../components/css-pages/accesibilidad.css"
import BtnUp from "../components/buttons/BtnUp"
import BtnBack from "../components/buttons/BtnBack"
const Accesibilidad = () => (
  <>
    <Halt3></Halt3>
    <div className="accesibilidad-container">
      <h1 className="eosc">Accesibilidad</h1>
      <section>
        <h2 className="sosc">Introducción</h2>
        <p className="eosc">
          Nuestro compromiso es hacer que nuestro sitio web sea accesible para
          todos, incluyendo personas con discapacidades. Nos esforzamos por
          cumplir con las pautas de accesibilidad web para proporcionar una
          experiencia inclusiva para todos los usuarios.
        </p>
      </section>
      <section>
        <h2 className="sosc">Mejoras de accesibilidad</h2>
        <ul>
          <li className="eosc">
            Textos alternativos para imágenes que describen su contenido para
            usuarios con discapacidad visual.
          </li>
          <li className="eosc">
            Navegación con el teclado para que todos los elementos interactivos
            sean accesibles sin necesidad de un ratón.
          </li>
          <li className="eosc">
            Contrastes de colores adecuados para asegurar que el texto sea
            legible para usuarios con baja visión.
          </li>
          <li className="eosc">
            Diseño responsive para garantizar que el sitio se vea y funcione
            bien en todos los dispositivos, incluyendo móviles y tablets.
          </li>
          <li className="eosc">
            Etiquetas ARIA para mejorar la experiencia de los usuarios que
            utilizan lectores de pantalla.
          </li>
        </ul>
      </section>
      <section>
        <h2 className="sosc">Cómo usar las funciones de accesibilidad</h2>
        <p className="eosc">
          Puedes navegar por nuestro sitio utilizando el teclado. Usa la tecla
          Tab para moverte entre los enlaces y botones. Para activar un enlace o
          botón, presiona Enter. Utiliza Shift + Tab para retroceder en la
          navegación.
        </p>
        <p className="eosc">
          Asegúrate de que tu navegador esté actualizado y considera utilizar
          extensiones o complementos de accesibilidad que puedan mejorar tu
          experiencia de navegación.
        </p>
      </section>
      <section>
        <h2 className="sosc">Tecnologías Asistivas</h2>
        <p className="eosc">
          Nuestro sitio es compatible con varias tecnologías asistivas que
          permiten a los usuarios con discapacidades navegar de manera efectiva.
          Algunas de estas tecnologías incluyen:
        </p>
        <ul>
          <li className="eosc">
            Lectores de pantalla como JAWS, NVDA y VoiceOver.
          </li>
          <li className="eosc">
            Software de reconocimiento de voz como Dragon NaturallySpeaking.
          </li>
          <li className="eosc">
            Ampliadores de pantalla para usuarios con baja visión.
          </li>
          <li className="eosc">
            Teclados alternativos y dispositivos de entrada adaptativos.
          </li>
        </ul>
      </section>
      <section>
        <h2 className="sosc">Pruebas de Accesibilidad</h2>
        <p className="eosc">
          Realizamos pruebas regulares de accesibilidad utilizando herramientas
          automatizadas y evaluaciones manuales para identificar y corregir
          problemas de accesibilidad. Nos basamos en las pautas de accesibilidad
          WCAG 2.1 para asegurarnos de que nuestro sitio cumple con los
          estándares internacionales.
        </p>
      </section>
      <section>
        <h2 className="sosc">Contacto</h2>
        <p className="eosc">
          Si tienes alguna sugerencia o problema con la accesibilidad, por favor
          contáctanos en{" "}
          <a href="mailto:tandemaranjuez@ejemplo.com" className="eosc">
            tandemaranjuez@ejemplo.com
          </a>
          . Apreciamos tus comentarios y nos esforzaremos por mejorar la
          accesibilidad de nuestro sitio.
        </p>
      </section>
    </div>
    <BtnUp />
    <BtnBack></BtnBack>
    <Footer></Footer>
  </>
)
export const Head = () => <Seo title="Accesibilidad" />
export default Accesibilidad
