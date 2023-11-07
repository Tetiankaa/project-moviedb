import {IRes} from "../types";
import {IResPoster} from "../interfaces";
import {axiosService} from "./axiosService";
import {urls} from "../constants";

const posterService = {
    getPoster:():IRes<IResPoster>=>axiosService.get(urls.configuration)
}
export {posterService}