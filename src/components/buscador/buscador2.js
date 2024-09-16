const Buscador2 = ({ onSearch }) => {
  const [query, setQuery] = useState(''); // Búsqueda
  const [results, setResults] = useState([]); // Resultados devueltos del backend
  const [selectedQr, setSelectedQr] = useState(null); // QR seleccionado

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
          setResults(result.qrs); // Si hay resultados, los mostramos
        } else {
          setResults([]); // Limpiar si no hay resultados
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchResults();
  }, [query]);

  // Manejar la actualización del input de búsqueda
  const handleSearch = (event) => {
    setQuery(event.target.value); // Actualizar el valor de búsqueda
    onSearch(event.target.value); // Pasa la búsqueda al componente padre
  };

  // Cuando seleccionamos un QR, lo marcamos como seleccionado
  const handleItemClick = (qr) => {
    setSelectedQr(qr.id); // Resaltar el QR seleccionado
    onSearch(qr.name_qr);  // Envía el nombre seleccionado al componente padre
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
      
      {/* Si no hay resultados coincidentes */}
      {query && results.length === 0 ? (
        <p className="buscador-no-results">QR no encontrado</p>
      ) : (
        results.length > 0 && (
          <ul className="buscador-results">
            {results.map((qr) => (
              <li
                key={qr.id}
                className={`buscador-item ${selectedQr === qr.id ? 'selected' : ''}`} // Resaltar el QR seleccionado
                onClick={() => handleItemClick(qr)} // Resaltar y filtrar al hacer clic
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
