function CharacterCard({ personaje, esFavorito, onToggleFavorito, esBloqueado, onToggleBloqueado }) {
  return (
    <div className="card">
      <img src={personaje.image} alt={personaje.name} />
      <h3>{personaje.name}</h3>
      <p>{personaje.species} · {personaje.status}</p>
      <div className="card-actions">
        <button
          className={esFavorito ? 'btn-fav activo' : 'btn-fav'}
          onClick={() => onToggleFavorito(personaje)}
        >
          {esFavorito ? '★ Favorito' : '☆ Favorito'}
        </button>
        <button
          className={esBloqueado ? 'btn-block activo' : 'btn-block'}
          onClick={() => onToggleBloqueado(personaje)}
        >
          {esBloqueado ? 'Desbloquear' : 'Bloquear'}
        </button>
      </div>
    </div>
  )
}

export default CharacterCard