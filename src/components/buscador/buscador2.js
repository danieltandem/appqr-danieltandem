import React, { useState, useEffect } from 'react';
import './buscador.css';

const Buscador2 = ({ onSearch }) => {
  const [query, setQuery] = useState(''); // Estado para el valor de búsqueda
  const [results, setResults] = useState([]); // Estado para los resultados
  const [selectedQr, setSelectedQr] = useState(null); // Estado para QR seleccionado
  const [errorMessage, setErrorMessage] = useState(''); // Estado para el mensaje de error

  useEffect(() => {
    // Si no hay búsqueda, limpiar resultados y mensajes
    if (query === '') {
      setResults([]);
      setErrorMessage('');
      return;
    }

    const fetchResults = async () => {
      try {
        // Realiza la petición al backend
        const response = await fetch(`https://vigas.tandempatrimonionacional.eu/dani/v1/qr/buscador2.php?query=${encodeURIComponent(query)}`);
        
        // Verificar si la respuesta fue correcta
        if (!response.ok) {
          throw new Error(`Error en la respuesta: ${response.statusText}`);
        }

        const result = await response.json();
        console.log('Respuesta del servidor:', result); // Depurar la respuesta del servidor

        // Si hay resultados, actualizamos el estado
        if (result.qrs && result.qrs.length > 0) {
          setResults(result.qrs);
          setErrorMessage('');
        } else {
          // Si no hay resultados, mostrar el mensaje del backend
          setResults([]);
          setErrorMessage(result.message || 'QR no encontrado');
        }
      } catch (error) {
        // En caso de error, mostrar un mensaje de error
        console.error('Error al buscar los QRs:', error);
        setErrorMessage(`Error al buscar los QR: ${error.message}`);
      }
    };

    fetchResults();
  }, [query]);

  // Manejar cambios en el input de búsqueda
  const handleSearch = (event) => {
    setQuery(event.target.value); // Actualizar el valor de búsqueda
  };

  // Manejar selección de un QR
  const handleItemClick = (qr) => {
    setSelectedQr(qr.qr_id); // Marcar el QR seleccionado

    // Redirigir a la página de detalles del QR
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

      {/* Mostrar mensaje de error si hay alguno */}
      {errorMessage && <p className="buscador-no-results">{errorMessage}</p>}

      {/* Mostrar resultados si hay coincidencias */}
      {results.length > 0 && (
        <ul className="buscador-results">
          {results.map((qr) => (
            <li
              key={qr.qr_id}
              className={`buscador-item ${selectedQr === qr.qr_id ? 'selected' : ''}`}
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
