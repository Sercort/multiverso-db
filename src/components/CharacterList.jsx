import CharacterCard from './CharacterCard'

function CharacterList({ personajes, favoritos, bloqueados, onToggleFavorito, onToggleBloqueado }) {
  if (personajes.length === 0) {
    return (
      <p className="empty">
        No se encontraron personajes con ese criterio de búsqueda.
      </p>
    )
  }

  return (
    <div className="grid">
      {personajes.map((personaje) => (
        <CharacterCard
          key={personaje.id}
          personaje={personaje}
          esFavorito={favoritos.some((f) => f.id === personaje.id)}
          esBloqueado={bloqueados.some((b) => b.id === personaje.id)}
          onToggleFavorito={onToggleFavorito}
          onToggleBloqueado={onToggleBloqueado}
        />
      ))}
    </div>
  )
}

export default CharacterList