/* eslint-disable react/prop-types */
import '../App.css'

function ListGifs({ gifs }) {
  return (
    <ul className='grid-gifs'>
      {gifs.map((gif) => (
        <li key={gif.id}>
          <p>{gif.title}</p>
          <img src={gif.image} alt={gif.title} />
        </li>
      ))}
    </ul>
  )
}

export function Gifs({ gifs }) {
  const hasGifs = gifs?.length > 0

  return (
    <>{hasGifs ? <ListGifs gifs={gifs} /> : <p>No se encontraron Gifs</p>}</>
  )
}
