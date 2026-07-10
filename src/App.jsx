import Header from './components/Header'
import CharacterList from './components/CharacterList'
import Loader from './components/Loader'
import ErrorMessage from './components/ErrorMessage'
import useFetch from './hooks/useFetch'
import './App.css'

const API_URL = 'https://rickandmortyapi.com/api/character'

function App() {
  const { data: personajes, loading, error } = useFetch(API_URL)

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        {loading && <Loader />}
        {error && <ErrorMessage mensaje={error} />}
        {!loading && !error && <CharacterList personajes={personajes} />}
      </main>
    </div>
  )
}

export default App