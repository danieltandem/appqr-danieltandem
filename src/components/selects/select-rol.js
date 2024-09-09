import React, { useState } from "react";
import "../selects/selects.css";

const SelectRol = ({ onSelect }) => {
  const [isActive, setIsActive] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Seleccionar");

  const options = [
    { value: "guest", label: "Invitado" },
    { value: "employee", label: "Empleado" },
    { value: "admin", label: "Administrador" },
  ];

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  const handleSelect = (option) => {
    setSelectedOption(option.label);
    setIsActive(false);
    onSelect(option.value);
  };

  return (
    <div
      className={`sel sel--selectrol ${isActive ? "active" : ""}`}
      onClick={handleToggle}
    >
      <span className="sel__placeholder">{selectedOption}</span>
      <div className="sel__box">
        {options.map((option, index) => (
          <span
            key={index}
            className={`sel__box__options ${
              selectedOption === option.label ? "selected" : ""
            }`}
            onClick={() => handleSelect(option)}
          >
            {option.label}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SelectRol;
