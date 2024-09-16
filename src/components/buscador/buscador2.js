import React, { useState, useEffect } from 'react';
import './buscador.css';

const Buscador2 = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [selectedQr, setSelectedQr] = useState(null);

  useEffect(() => {
    if (query === '') {
      setResults([]);
      return;
    }

    const fetchResults = async () => {
      try {
        const response = await fetch(`https://vigas.tandempatrimonionacional.eu/dani/v1/qr/buscador2.php?query=${encodeURIComponent(query)}`);
        const result = await response.json();

        if (result.qrs && result.qrs.length > 0) {
          setResults(result.qrs);
        } else {
          setResults([]);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setResults([]);
      }
    };

    fetchResults();
  }, [query]);

  const handleSearch = (event) => {
    setQuery(event.target.value);
    onSearch(event.target.value);
  };

  const handleItemClick = (qr) => {
    setSelectedQr(qr.id); // Guardar el ID del QR seleccionado para cambiar el estilo
    onSearch(qr.name_qr);  // Pasar el nombre del QR al componente padre
    window.location.href = `https://vigas.tandempatrimonionacional.eu/dani/v1/qr/qr_view.php?id=${qr.id}`; // Redirigir al QR seleccionado
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
      
      {query && results.length === 0 ? (
        <p className="buscador-no-results">QR no encontrado</p>
      ) : (
        results.length > 0 && (
          <ul className="buscador-results">
            {results.map((qr) => (
              <li
                key={qr.id}
                className={`buscador-item ${selectedQr === qr.id ? 'selected' : ''}`}
                onClick={() => handleItemClick(qr)} // Manejar la selección del QR
              >
                {qr.name_qr}
              </li>
            ))}
          </ul>
        )
      )}
    </div>
  );
};

export default Buscador2;
