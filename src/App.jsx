import { Gifs } from './components/ListGifs'
import { useGifs, useSearch } from './hooks'
import './App.css'

export function App() {
  const { search, setSearch, error } = useSearch()
  const { gifs, getGifs, isLoading } = useGifs({ search })

  const handleSubmit = (event) => {
    event.preventDefault()
    getGifs({ search, error })
  }

  const handleInput = (event) => {
    const query = event.target.value
    setSearch(query)
  }

  return (
    <main>
      <header className='header-form'>
        <h1>Search Gifs</h1>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='batman, road, fornite, valorant'
            onChange={handleInput}
            autoFocus
            style={{
              border: '1px solid transparent',
              borderColor: error ? 'red' : 'transparent',
            }}
          />
          <button>Search</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>

      <section>{isLoading ? <p>Cargando...</p> : <Gifs gifs={gifs} />}</section>
    </main>
  )
}
