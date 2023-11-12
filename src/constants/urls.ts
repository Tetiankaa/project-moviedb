const baseURL = 'https://api.themoviedb.org/3';

const movies = '/discover/movie';
const movie = '/movie';

const genres = '/genre/movie/list';
const search = '/search/movie';
const configuration = '/configuration';
const videos = '/videos';
const reviews = '/reviews';

const urls = {
    movies: {
        base: movies,
        byId: (id: string): string => `${movie}/${id}`
    },
    genres,
    search,
    configuration,
    video: {
        byId: (id: number): string => `${movie}/${id}${videos}`
    },
    reviews: {
        byId: (id: number): string => `${movie}/${id}${reviews}`
    }
}

export {baseURL, urls}