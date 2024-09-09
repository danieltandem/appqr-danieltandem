import React, { useState } from "react"
import "../buttons/buttons.css"
import "../modals/modal.css"
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
} from "react-share"

function BtnsSocialMedia() {
  const [copySuccess, setCopySuccess] = useState(false)
  const url = window.location.href // Obtener la URL actual

  const handleCopyLink = () => {
    navigator.clipboard
      .writeText(url)
      .then(() => {
        setCopySuccess(true)
        setTimeout(() => {
          setCopySuccess(false)
        }, 2000) // El mensaje desaparece después de 2 segundos
      })
      .catch(err => {
        console.error("Error al copiar la URL: ", err)
      })
  }
  return (
    <>
      <ul class="wrapper">
        {/*BOTÓN COPIAR LINK*/}
        <li className="icon copyLink" onClick={handleCopyLink}>
          <span className="tooltip">Copiar</span>
          <svg
            height="1.5em"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1024 1024"
          >
            <path d="M767.99994 585.142857q75.995429 0 129.462857 53.394286t53.394286 129.462857-53.394286 129.462857-129.462857 53.394286-129.462857-53.394286-53.394286-129.462857q0-6.875429 1.170286-19.456l-205.677714-102.838857q-52.589714 49.152-124.562286 49.152-75.995429 0-129.462857-53.394286t-53.394286-129.462857 53.394286-129.462857 129.462857-53.394286q71.972571 0 124.562286 49.152l205.677714-102.838857q-1.170286-12.580571-1.170286-19.456 0-75.995429 53.394286-129.462857t129.462857-53.394286 129.462857 53.394286 53.394286 129.462857-53.394286 129.462857-129.462857 53.394286q-71.972571 0-124.562286-49.152l-205.677714 102.838857q1.170286 12.580571 1.170286 19.456t-1.170286 19.456l205.677714 102.838857q52.589714-49.152 124.562286-49.152z"></path>
          </svg>
        </li>
        {/*BOTÓN COPIAR LINK*/}
        {/* BOTÓN FACEBOOK */}
        <FacebookShareButton
          url={url}
          quote={"¡Mira lo que encontré en este increíble sitio!"}
          hashtag={"#generadorqrpatrimonio"}
        >
          <li class="icon facebook">
            <span class="tooltip">Facebook</span>
            <svg
              height="1.5em"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 350 512"
            >
              <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
            </svg>
          </li>
        </FacebookShareButton>
        {/* BOTÓN FACEBOOK */}
        {/* BOTÓN TWITTER / X */}
        <TwitterShareButton
          url={url}
          quote={"¡Mira lo que encontré en este increíble sitio!"}
          hashtag={"#generadorqrpatrimonio"}
        >
          <li class="icon x">
            <span class="tooltip">X</span>
            <svg
              height="1.5em"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
            </svg>
          </li>
        </TwitterShareButton>
        {/* BOTÓN TWITTER/X */}
        {/* BOTÓN LINKEDIN */}
        <LinkedinShareButton
          url={url}
          quote={"¡Mira lo que encontré en este increíble sitio!"}
          hashtag={"#generadorqrpatrimonio"}
        >
          <li class="icon linkedin">
            <span class="tooltip">LinkedIn</span>
            <svg
              height="1.5em"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
            </svg>
          </li>
        </LinkedinShareButton>
        {/* BOTÓN LINKEDIN */}
        {/* BOTÓN WHATSAPP */}
        <WhatsappShareButton
          url={url}
          quote={"¡Mira lo que encontré en este increíble sitio!"}
          hashtag={"#generadorqrpatrimonio"}
        >
          <li class="icon whatsapp">
            <span class="tooltip">WhatsApp</span>

            <svg
              height="1.5em"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
            >
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path>{" "}
            </svg>
          </li>
        </WhatsappShareButton>
        {/* BOTÓN WHATSAPP */}
      </ul>
      {copySuccess && (
        <div className="copy-notification">Enlace copiado al portapapeles</div>
      )}
    </>
  )
}

export default BtnsSocialMedia