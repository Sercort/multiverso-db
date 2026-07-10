function FavoritesPanel({ favoritos, onQuitar }) {
  return (
    <aside className="favoritos-panel">
      <h2>Favoritos ({favoritos.length})</h2>
      {favoritos.length === 0 && <p className="empty">Sin favoritos aún.</p>}
      <ul>
        {favoritos.map((personaje) => (
          <li key={personaje.id}>
            <img src={personaje.image} alt={personaje.name} />
            <span>{personaje.name}</span>
            <button onClick={() => onQuitar(personaje.id)}>✕</button>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default FavoritesPanel