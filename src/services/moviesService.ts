import {IRes} from "../types";
import {IMovie, IMovieResponse} from "../interfaces";
import {axiosService} from "./axiosService";
import {urls} from "../constants";

const moviesService = {
    getAll:(page:string):IRes<IMovieResponse>=>axiosService.get(urls.movies.base,{params:{page}}),
    getById:(id:string):IRes<IMovie>=>axiosService.get(urls.movies.byId(id)),
    getByGenreId:(genreId:string,page:string):IRes<IMovieResponse>=>axiosService.get(urls.movies.base,{params:{with_genres:genreId,page}})
}

export {moviesService}