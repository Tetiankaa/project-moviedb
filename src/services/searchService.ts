import {IRes} from "../types";
import {IResMovie, ISearch} from "../interfaces";
import {axiosService} from "./axiosService";
import {urls} from "../constants";

const searchService = {
    getAll: (query: ISearch, page: string):IRes<IResMovie>=>axiosService.get(urls.search, {params:{query:query.search, page}})
}
export {searchService}