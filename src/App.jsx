import { useState } from 'react'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import CharacterList from './components/CharacterList'
import FavoritesPanel from './components/FavoritesPanel'
import Stats from './components/Stats'
import Loader from './components/Loader'
import ErrorMessage from './components/ErrorMessage'
import useFetch from './hooks/useFetch'
import useLocalStorage from './hooks/useLocalStorage'
import './App.css'

const API_URL = 'https://rickandmortyapi.com/api/character'

function App() {
  const { data: personajes, loading, error } = useFetch(API_URL)
  const [busqueda, setBusqueda] = useState('')
  const [favoritos, setFavoritos] = useLocalStorage('favoritos', [])
  const [bloqueados, setBloqueados] = useLocalStorage('bloqueados', [])

  const personajesFiltrados = personajes
    .filter((p) => !bloqueados.some((b) => b.id === p.id))
    .filter((p) => p.name.toLowerCase().includes(busqueda.toLowerCase()))

  function toggleFavorito(personaje) {
    setFavoritos((prev) =>
      prev.some((f) => f.id === personaje.id)
        ? prev.filter((f) => f.id !== personaje.id)
        : [...prev, personaje]
    )
  }

  function toggleBloqueado(personaje) {
    setBloqueados((prev) => {
      const yaBloqueado = prev.some((b) => b.id === personaje.id)
      if (yaBloqueado) {
        return prev.filter((b) => b.id !== personaje.id)
      }
      return [...prev, personaje]
    })
    setFavoritos((prev) => prev.filter((f) => f.id !== personaje.id))
  }

  return (
    <div className="app">
      <Header />
      <Stats
        total={personajes.length}
        favoritos={favoritos.length}
        bloqueados={bloqueados.length}
      />
      <div className="layout">
        <main className="main-content">
          <SearchBar valor={busqueda} onCambiar={setBusqueda} />
          {loading && <Loader />}
          {error && <ErrorMessage mensaje={error} />}
          {!loading && !error && (
            <CharacterList
              personajes={personajesFiltrados}
              favoritos={favoritos}
              bloqueados={bloqueados}
              onToggleFavorito={toggleFavorito}
              onToggleBloqueado={toggleBloqueado}
            />
          )}
        </main>
        <FavoritesPanel favoritos={favoritos} onQuitar={(id) =>
          setFavoritos((prev) => prev.filter((f) => f.id !== id))
        } />
      </div>
    </div>
  )
}

export default App

