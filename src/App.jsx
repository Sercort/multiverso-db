import { useState } from 'react'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import CharacterList from './components/CharacterList'
import Loader from './components/Loader'
import ErrorMessage from './components/ErrorMessage'
import useFetch from './hooks/useFetch'
import './App.css'

const API_URL = 'https://rickandmortyapi.com/api/character'

function App() {
  const { data: personajes, loading, error } = useFetch(API_URL)
  const [busqueda, setBusqueda] = useState('')

  const personajesFiltrados = personajes.filter((p) =>
    p.name.toLowerCase().includes(busqueda.toLowerCase())
  )

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <SearchBar valor={busqueda} onCambiar={setBusqueda} />
        {loading && <Loader />}
        {error && <ErrorMessage mensaje={error} />}
        {!loading && !error && (
          <CharacterList personajes={personajesFiltrados} />
        )}
      </main>
    </div>
  )
}

export default App