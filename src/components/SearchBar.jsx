function SearchBar({ valor, onCambiar }) {
  return (
    <input
      type="text"
      className="search-bar"
      placeholder="Buscar personaje..."
      value={valor}
      onChange={(e) => onCambiar(e.target.value)}
    />
  )
}

export default SearchBar