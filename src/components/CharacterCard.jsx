function CharacterCard({ personaje }) {
  return (
    <div className="card">
      <img src={personaje.image} alt={personaje.name} />
      <h3>{personaje.name}</h3>
      <p>{personaje.species} · {personaje.status}</p>
    </div>
  )
}

export default CharacterCard