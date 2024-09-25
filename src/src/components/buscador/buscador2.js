import React, { useState, useEffect } from 'react';
import './buscador.css';
const Buscador2 = ({ onSearch }) => {
  const [query, setQuery] = useState(''); // Estado para la búsqueda (string)
  const [results, setResults] = useState([]); // Estado para los resultados (array)
  const [selectedQr, setSelectedQr] = useState(null); // Estado para el QR seleccionado (null o string/number)
  // Hook de efecto para hacer la búsqueda cada vez que el query cambia
  useEffect(() => {
    if (query === '') {
      setResults([]); // Limpiamos resultados si el query está vacío
      return;
    }
    const fetchResults = async () => {
      try {
        const response = await fetch(`https://vigas.tandempatrimonionacional.eu/dani/v1/qr/buscador2.php?query=${encodeURIComponent(query)}`);
        const result = await response.json();
        if (result.qrs && result.qrs.length > 0) {
          setResults(result.qrs); // Si hay resultados, los guardamos en el estado
        } else {
          setResults([]); // Si no hay resultados, limpiamos el estado
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setResults([]); // En caso de error, también limpiamos el estado
      }
    };
    fetchResults();
  }, [query]);
  // Función para manejar la actualización del input de búsqueda
  const handleSearch = (event) => {
    setQuery(event.target.value); // Actualizamos el estado con el valor del input
    onSearch(event.target.value); // Llamamos a la función pasada desde el padre para que se actualice la lista
  };
  // Función para manejar la selección de un QR de los resultados
  const handleItemClick = (qr) => {
    setSelectedQr(qr.id); // Actualizamos el estado con el ID del QR seleccionado
    onSearch(qr.name_qr);
  }
  return (
    <div className="buscador-container">
      <input
        type="text"
        placeholder="Escribe aquí para buscar"
        value={query} // El valor del input está controlado por el estado `query`
        onChange={handleSearch} // Se actualiza el estado cuando el usuario escribe
        className="buscador-input"
      />
      {/* Mostramos un mensaje si no hay resultados coincidentes */}
      {query && results.length === 0 ? (
        <p className="buscador-no-results">QR no encontrado</p>
      ) : (
        results.length > 0 && (
          <ul className="buscador-results">
            {results.map((qr) => (
              <button
                key={qr.id} // Cada elemento de la lista necesita una clave única
                className={`buscador-item ${selectedQr === qr.id ? 'selected' : ''}`} // Añadimos una clase si el QR está seleccionado
                onClick={() => handleItemClick(qr)} // Seleccionamos el QR al hacer clic
              >
                {qr.name_qr} {/* Mostramos el nombre del QR */}
              </button>
            ))}
          </ul>
        )
      )}
    </div>
  );
};
export default Buscador2;