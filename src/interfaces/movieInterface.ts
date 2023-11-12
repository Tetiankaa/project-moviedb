import {IGenre} from "./genreInterface";

export interface IMovie {
    id:number,
    genre_ids:number[],
    genres:IGenre[],
    budget:number,
    runtime:number,
    original_title:string,
    overview:string,
    poster_path:string,
    release_date:string,
    vote_average:number,
    vote_count:number,
    production_countries:[{name:string}] | []
}