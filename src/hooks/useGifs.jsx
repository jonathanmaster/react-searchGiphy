import { useMemo, useRef, useState } from 'react'
import { searchGifs } from '../service/fetchGifs'

export const useGifs = ({ sort }) => {
  const [gifs, setGifs] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  // utilizamos un useRef para guardar la búsqueda anterior
  const previousSearch = useRef()

  const getGifs = async ({ search, error }) => {
    // para que no se vuelva a hacer la búsqueda si es la misma
    if (search === previousSearch.current) return

    try {
      setIsLoading(true)
      if (error !== null) return
      previousSearch.current = search //actualizamos osea se le pasa el valor

      const results = await searchGifs({ search })
      setGifs(results)
      setIsLoading(false)
    } catch (error) {
      throw new Error(error)
    }
  }

  // usamos useMemo para que no se renderice todas las veces que cambia el input
  // si no solo cuando se hace la búsqueda y se hace el sort
  const sortedGifs = useMemo(() => {
    return sort
      ? [...gifs].sort((a, b) => a.title.localeCompare(b.title)) // el localCompare lo compara de forma local y con asentos
      : gifs
  }, [gifs, sort])

  return { getGifs, gifs: sortedGifs, isLoading }
}
