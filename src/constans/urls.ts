const baseURL = 'https://api.themoviedb.org/3'
const movies = '/discover/movie'
const movie = '/movie'
const genres = '/genre/movie/list'
const search = '/search/movie'

const urls = {
    movie: {
        base: movies,
        byId: (id: number) => `${movie}/${id}`,
        genresByID: (id: number) => `${movies}?with_genres=${id}`
    },
    genre: {
        base: genres
    },
    search: {
        base: (query: string) => `${search}?query=${query}`
    }
}
export {
    baseURL,
    urls
}