import CharacterCard from './CharacterCard'

function CharacterList({ personajes }) {
  if (personajes.length === 0) {
    return <p className="empty">No hay personajes para mostrar.</p>
  }

  return (
    <div className="grid">
      {personajes.map((personaje) => (
        <CharacterCard key={personaje.id} personaje={personaje} />
      ))}
    </div>
  )
}

export default CharacterList