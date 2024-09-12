import React, { useState, useEffect } from 'react';
import './buscador.css';

const Buscador2 = ({ onSearch }) => {
  const [query, setQuery] = useState(''); // Estado para el valor de búsqueda
  const [results, setResults] = useState([]); // Estado para almacenar resultados
  const [selectedQr, setSelectedQr] = useState(null); // Estado para el QR seleccionado
  const [errorMessage, setErrorMessage] = useState(''); // Estado para mensaje de error

  useEffect(() => {
    // Si el input está vacío, limpiar los resultados y el mensaje de error
    if (query === '') {
      setResults([]);
      setErrorMessage('');
      return;
    }

    const fetchResults = async () => {
      try {
        // Realiza la petición al backend para obtener los resultados
        const response = await fetch(`https://vigas.tandempatrimonionacional.eu/dani/v1/qr/buscador2.php?query=${encodeURIComponent(query)}`);
        const result = await response.json();

        console.log('Respuesta del servidor:', result); // Para depuración: verificar qué devuelve el servidor

        // Si se encuentran resultados
        if (result.qrs && result.qrs.length > 0) {
          setResults(result.qrs); // Actualizar los resultados
          setErrorMessage(''); // Limpiar el mensaje de error
        } else {
          // Si no se encuentran resultados
          setResults([]); 
          setErrorMessage(result.message || 'QR no encontrado');
        }
      } catch (error) {
        console.error('Error al buscar los QRs:', error); // Manejar errores de red
        setErrorMessage('Error al buscar los QR');
      }
    };

    // Llamar a la función fetchResults cuando cambia el input de búsqueda
    fetchResults();
  }, [query]);

  // Manejar la actualización del input de búsqueda
  const handleSearch = (event) => {
    setQuery(event.target.value); // Actualizar el valor de búsqueda
  };

  // Manejar la selección de un QR
  const handleItemClick = (qr) => {
    setSelectedQr(qr.qr_id); // Resaltar el QR seleccionado

    // Redirigir a una nueva página (puedes cambiar esto según la lógica deseada)
    window.location.href = `/detalle-qr/${qr.qr_id}`;
  };

  return (
    <div className="buscador-container">
      <input
        type="text"
        placeholder="Escribe aquí para buscar"
        value={query}
        onChange={handleSearch}
        className="buscador-input"
      />

      {/* Mostrar mensaje de error si existe */}
      {errorMessage && <p className="buscador-no-results">{errorMessage}</p>}

      {/* Mostrar resultados si existen */}
      {results.length > 0 && (
        <ul className="buscador-results">
          {results.map((qr) => (
            <li
              key={qr.qr_id}
              className={`buscador-item ${selectedQr === qr.qr_id ? 'selected' : ''}`} // Añadir la clase 'selected' si está seleccionado
              onClick={() => handleItemClick(qr)} // Redirigir al hacer clic
            >
              {qr.qr_name_qr} {/* Mostrar el nombre del QR */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Buscador2;