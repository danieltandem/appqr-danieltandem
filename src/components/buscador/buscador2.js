import React, { useState, useEffect } from 'react';
import './buscador.css';

const Buscador2 = ({ onSearch }) => {
  const [query, setQuery] = useState(''); // Estado para la búsqueda
  const [results, setResults] = useState([]); // Estado para los resultados
  const [selectedQr, setSelectedQr] = useState(null); // Estado para el QR seleccionado
  const [errorMessage, setErrorMessage] = useState(''); // Estado para mensajes de error

  useEffect(() => {
    if (query === '') {
      setResults([]); // Limpiar resultados si la consulta está vacía
      setErrorMessage('');
      return;
    }

    const fetchResults = async () => {
      try {
        const response = await fetch(
          `https://vigas.tandempatrimonionacional.eu/dani/v1/qr/buscador2.php?query=${encodeURIComponent(query)}`
        );

        if (!response.ok) {
          throw new Error(`Error en la respuesta: ${response.statusText}`);
        }

        const result = await response.json();
        console.log('Respuesta del servidor:', result);

        if (result.qrs && result.qrs.length > 0) {
          setResults(result.qrs);
          setErrorMessage('');
        } else {
          setResults([]); // No hay coincidencias
          setErrorMessage(result.message || 'QR no encontrado');
        }
      } catch (error) {
        console.error('Error al buscar los QRs:', error);
        setErrorMessage(`Error al buscar los QR: ${error.message}`);
      }
    };

    fetchResults();
  }, [query]);

  // Manejar el cambio en el input de búsqueda
  const handleSearch = (event) => {
    setQuery(event.target.value); // Actualizar la búsqueda en tiempo real
  };

  // Manejar cuando se selecciona un QR
  const handleItemClick = (qr) => {
    setSelectedQr(qr.qr_id); // Establecer el QR seleccionado
    console.log(`QR seleccionado: ${qr.qr_id}`);

    // Redirigir a la página del detalle del QR
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

      {/* Mostrar lista de resultados si hay coincidencias */}
      {results.length > 0 && (
        <ul className="buscador-results">
          {results.map((qr) => (
            <li
              key={qr.qr_id}
              className={`buscador-item ${selectedQr === qr.qr_id ? 'selected' : ''}`} // Añadir clase si está seleccionado
              onClick={() => handleItemClick(qr)}
            >
              {qr.qr_name_qr}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Buscador2;