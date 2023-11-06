import {IMovie} from "./movieInterface";

export interface IMovieResponse{
    page:number,
    results:IMovie[],
    total_pages:number,
    total_results:number
}