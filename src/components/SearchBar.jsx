function SearchBar({ valor, onCambiar }) {
  return (
    <input
      type="text"
      className="search-bar"
      placeholder="Buscar por nombre, especie o estado (vivo/muerto)..."
      value={valor}
      onChange={(e) => onCambiar(e.target.value)}
    />
  )
}

export default SearchBar