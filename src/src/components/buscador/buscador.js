import React, { useState, useEffect } from "react"
import "./buscador.css"

const Buscador = ({ onSearch, onSelect }) => {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState([])

  useEffect(() => {
    if (query === "") {
      setResults([])
      return
    }
    const fetchResults = async () => {
      try {
        const response = await fetch(
          `https://vigas.tandempatrimonionacional.eu/vigas/v1/user/buscador.php?query=${encodeURIComponent(
            query
          )}`
        )
        const result = await response.json()
        setResults(result.users)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }
    fetchResults()
  }, [query])

  const handleSearch = event => {
    const newQuery = event.target.value
    setQuery(newQuery)
    onSearch(newQuery)
  }

  const handleSelect = id => {
    onSelect(id)
  }

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
        <p className="buscador-no-results">El usuario o rol no encontrado</p>
      ) : (
        results.length > 0 && (
          <ul className="buscador-results">
            {results.map(item => (
              <button
                key={item.id}
                className="buscador-item"
                onClick={() => handleSelect(item.id)}
                onKeyDown={e => {
                  if (e.key === "Enter" || e.key === " ") {
                    handleSelect(item.id)
                  }
                }}
              >
                {`${item.name} - ${item.role}`}
              </button>
            ))}
          </ul>
        )
      )}
    </div>
  )
}

export default Buscador
