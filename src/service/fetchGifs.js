/* eslint-disable no-undef */

export const searchGifs = async ({ search }) => {
  try {
    const resp = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${
        import.meta.env.VITE_API_KEY
      }&q=${search}&limit=12`
    )
    const results = await resp.json()
    const gifs = results.data

    return gifs?.map((gif) => ({
      id: gif.id,
      title: gif.title,
      image: gif.images.original.url,
    }))
  } catch (error) {
    throw new Error(error)
  }
}
