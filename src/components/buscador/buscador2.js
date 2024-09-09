import React, { useState, useEffect } from 'react';
import './buscador.css';

const Buscador2 = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query === '') {
      setResults([]);
      return;
    }
    const fetchResults = async () => {
      try {
        const response = await fetch(`https://vigas.tandempatrimonionacional.eu/dani/v1/qr/buscador.php?query=${encodeURIComponent(query)}`);
        const result = await response.json();
        setResults(result.qrs);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchResults();
  }, [query]);

  const handleSearch = (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    onSearch(newQuery);
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
              <li key={qr.qr_id} className="buscador-item" onClick={() => onSearch(qr.qr_name_qr)}>
                {qr.qr_name_qr}
              </li>
            ))}
          </ul>
        )
      )}
    </div>
  );
};

export default Buscador2;