import { useEffect, useRef, useState } from 'react'

export const useSearch = () => {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirtsInput = useRef(true)

  useEffect(() => {
    // Validación
    // para saber si es el primer input del usuario apenas entra a la página y ademas no se vuelve a renderizar
    if (isFirtsInput.current) {
      isFirtsInput.current = search === ''
      return
    }

    if (search === '') {
      setError('No se puede buscar una palabra vacia')
      return
    }
    if (!isNaN(search)) {
      setError('No se puede buscar por un número')
      return
    }

    if (search.length < 3) {
      setError('La búsqueda debe de tener mas de 3 letras ')
      return
    }

    setError(null)
  }, [search, setSearch])

  return { search, setSearch, error, setError }
}
