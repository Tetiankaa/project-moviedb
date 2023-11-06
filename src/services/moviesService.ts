import {IRes} from "../types";
import {IMovieResponse} from "../interfaces";
import {axiosService} from "./axiosService";
import {urls} from "../constants";

const moviesService = {
    getAll:(page:string):IRes<IMovieResponse>=>axiosService.get(urls.movies.base,{params:{page}})
}

export {moviesService}