import {IRes} from "../types";
import {IMovieResponse, ISearch} from "../interfaces";
import {axiosService} from "./axiosService";
import {urls} from "../constants";

const searchService = {
    getAll: (query: ISearch, page: string):IRes<IMovieResponse>=>axiosService.get(urls.search, {params:{query:query.search, page}})
}
export {searchService}