import {IRes} from "../types";
import {IResReview} from "../interfaces";
import {axiosService} from "./axiosService";
import {urls} from "../constants";

const reviewService = {
    getById:(id:number):IRes<IResReview>=>axiosService.get(urls.reviews.byId(id))
}
export {reviewService}