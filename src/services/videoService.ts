import {IRes} from "../types";
import {axiosService} from "./axiosService";
import {urls} from "../constants";
import {IVideo} from "../interfaces";

const videoService = {
   getById:(id:number):IRes<IVideo>=>axiosService.get(urls.trailer.byId(id))
}
export {videoService}