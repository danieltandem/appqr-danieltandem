import React, { useState, useEffect, useRef } from "react";
import "../buttons/buttons.css";
import "../modals/modal.css";
import BtnsSocialMedia from "./BtnsSocialMedia";

function BtnShare() {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
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
  }, []);

  return (
    <React.Fragment>
      <button className="btnShare animationFundido" onClick={toggleModal}>
        <svg
          height="1.5em"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1024 1024"
        >
          <path d="M767.99994 585.142857q75.995429 0 129.462857 53.394286t53.394286 129.462857-53.394286 129.462857-129.462857 53.394286-129.462857-53.394286-53.394286-129.462857q0-6.875429 1.170286-19.456l-205.677714-102.838857q-52.589714 49.152-124.562286 49.152-75.995429 0-129.462857-53.394286t-53.394286-129.462857 53.394286-129.462857 129.462857-53.394286q71.972571 0 124.562286 49.152l205.677714-102.838857q-1.170286-12.580571-1.170286-19.456 0-75.995429 53.394286-129.462857t129.462857-53.394286 129.462857 53.394286 53.394286 129.462857-53.394286 129.462857-129.462857 53.394286q-71.972571 0-124.562286-49.152l-205.677714 102.838857q1.170286 12.580571 1.170286 19.456t-1.170286 19.456l205.677714 102.838857q52.589714-49.152 124.562286-49.152z"></path>
        </svg>
      </button>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal animationFundido" ref={modalRef}>
            <div className="modal-header">
              <h2>Compartir en redes sociales</h2>
              <button className="close-share-media" onClick={toggleModal}>❌</button>
            </div>
            <div className="modal-body">
              <p>Seleccione la red social donde desea compartir esta App</p>
              <BtnsSocialMedia />
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

export default BtnShare;