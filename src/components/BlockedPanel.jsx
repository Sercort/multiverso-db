function BlockedPanel({ bloqueados, onDesbloquear }) {
  return (
    <aside className="bloqueados-panel">
      <h2>Bloqueados ({bloqueados.length})</h2>
      {bloqueados.length === 0 && <p className="empty">Sin bloqueados aún.</p>}
      <ul>
        {bloqueados.map((personaje) => (
          <li key={personaje.id}>
            <img src={personaje.image} alt={personaje.name} />
            <span>{personaje.name}</span>
            <button onClick={() => onDesbloquear(personaje.id)}>Desbloquear</button>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default BlockedPanel