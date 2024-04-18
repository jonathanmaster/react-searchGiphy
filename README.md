## Enunciado

Crea una aplicación para buscar películas

API a usar: - [documentación](https://developers.giphy.com/docs/api)

ULR_SEARCH = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${search}&limit=10`

Requerimientos:

- [x] Necesita mostrar un input para buscar el gifs y un botón para buscar.
- [x] Lista las películas y muestra el título, poster.
- [x] Que el formulario funcione
- [x] Haz que las películas se muestren en un grid responsive.
- [x] Hacer el fetching de datos a la API

Primera iteración:

- [x] Evitar que se haga la misma búsqueda dos veces seguidas.
- [] Haz un boton para ordernar
- [] Haz que la búsqueda se haga automáticamente al escribir.
- [] Evita que se haga la búsqueda continuamente al escribir (debounce)

Segunda parte:
Haz uso de useContext para evitar pasar props innecesarias.

- [] Añade un filtro por categoría
- [] Haz que se puedan añadir los gifs a favoritos.
- [] Haz que se puedan eliminar los gifs de favoritos.
- [] Haz que se puedan modificar la cantidad de gifs .
- [] Sincroniza los cambios de favoritos con la lista de gifs.
- [] Guarda en un localStorage los favoritos para que se recupere al recargar la página.
