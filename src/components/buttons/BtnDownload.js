import React, { useState, useRef, useEffect } from "react";
import { StaticImage } from "gatsby-plugin-image";
import "../buttons/buttons.css";
import BtnClose from "./BtnClose";
import "../modals/modal.css";
import BtnPrimary from "../buttons/BtnPrimary";

function BtnDownload({ handleDownload, qr }) {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape" && isOpen) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <React.Fragment>
      <button className="btnDownload animationFundido" onClick={toggleModal}>
        <StaticImage
          className="icon-download"
          src="../../images/icons/icon-download.png"
          alt="Download"
        />
        <span>Descargar</span>
      </button>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal animationFundido" ref={modalRef}>
            <div className="modal-header">
              <h2>Descargar QR</h2>
              <BtnClose onClick={toggleModal} />
            </div>
            <div className="modal-body">
              <p>Seleccione el formato de descarga:</p>
              <BtnPrimary onClick={() => handleDownload('png', qr)}>Png</BtnPrimary>
              <BtnPrimary onClick={() => handleDownload('jpeg', qr)}>Jpeg</BtnPrimary>
              <BtnPrimary onClick={() => handleDownload('svg', qr)}>Svg</BtnPrimary>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

export default BtnDownload;
