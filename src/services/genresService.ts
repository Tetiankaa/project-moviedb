import {IRes} from "../types";
import {IResGenre} from "../interfaces";
import {axiosService} from "./axiosService";
import {urls} from "../constants";

const genresService = {
    getAll:():IRes<IResGenre>=>axiosService.get(urls.genres)
}
export {genresService}