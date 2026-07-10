function Stats({ total, favoritos, bloqueados }) {
  return (
    <div className="stats">
      <div className="stat-item">
        <span className="stat-num">{total}</span>
        <span>Totales</span>
      </div>
      <div className="stat-item">
        <span className="stat-num">{favoritos}</span>
        <span>Favoritos</span>
      </div>
      <div className="stat-item">
        <span className="stat-num">{bloqueados}</span>
        <span>Bloqueados</span>
      </div>
    </div>
  )
}

export default Stats