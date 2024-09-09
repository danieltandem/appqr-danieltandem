import React from 'react';
import "./desplegable.css";
const Desplegable = ({ options, onChange }) => {
  return (
    <div className="custom-select-wrapper">
      <div className="custom-select">
        <select className="select" defaultValue="default" onChange={onChange}>
          {options.map((option) => (
            <option key={option.value} value={option.value} disabled={option.disabled} >
              {option.label} 
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
export default Desplegable;