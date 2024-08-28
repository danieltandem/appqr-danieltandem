import React, { useState } from 'react';
import "./comp.css"
import { StaticImage } from 'gatsby-plugin-image';
function MyComponent({ onColorChange, onSizeChange }) {
  const [selectedColor, setSelectedColor] = useState('negro');
  const [selectedSize, setSelectedSize] = useState('pequeño');
  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
    onColorChange(event.target.value);
  };
  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
    onSizeChange(event.target.value);
  };
  return (
    <>
    <span for="pregunta" className='selector-color-qr'>Selecciona el color del QR</span>
    <div className='color-select'>
      <input
    type="radio"
    id="black-radio"
    name="color"
    value="black"
    checked={selectedColor === "black"}
    onChange={handleColorChange}
  />
  <label htmlFor="black-radio">
    <StaticImage src="../../images/QRs/qrnegro.png" alt="Negro" class='qrcolores' />
  </label>
  <br />
  <input
    type="radio"
    id="blue-radio"
    name="color"
    value="blue"
    checked={selectedColor === "blue"}
    onChange={handleColorChange}
  />
  <label htmlFor="blue-radio">
    <StaticImage src="../../images/QRs/qrazul.png" alt="Azul" class='qrcolores' />
  </label>
  <br />
  <input
    type="radio"
    id="red-radio"
    name="color"
    value="red"
    checked={selectedColor === "red"}
    onChange={handleColorChange}
  />
  <label htmlFor="red-radio">
    <StaticImage src="../../images/QRs/qrrojo.png" alt="Rojo" class='qrcolores'/>
  </label>
    <div >
      <label htmlFor="sizeSelect">Elige tamaño</label> <hr className='hr'/>
      <select id="sizeSelect" value={selectedSize} onChange={handleSizeChange} className='tamaño'>
        <option value="100">Pequeño</option>
        <option value="200">Mediano</option>
        <option value="300">Grande</option>
      </select>
      </div>
    </div>
    </>
  );
}
export default MyComponent;