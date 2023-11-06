const baseURL = 'https://api.themoviedb.org/3';

const movies = '/discover/movie';
const movie = '/movie';

const genres = '/genre/movie/list';
const search = '/search/keyword';
const configuration = '/configuration';

const urls={
    movies:{
        base:movies,
        byId:(id:string):string=>`${movie}/${id}`
    },
    genres,
    search,
    configuration
}

export {baseURL, urls}