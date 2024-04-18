import { useRef, useState } from 'react'
import { searchGifs } from '../service/fetchGifs'

export const useGifs = () => {
  const [gifs, setGifs] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  // utilizamos un useRef para guardar la búsqueda anterior
  const previousSearch = useRef()

  const getGifs = async ({ search, error }) => {
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

  return { getGifs, gifs, isLoading }
}
