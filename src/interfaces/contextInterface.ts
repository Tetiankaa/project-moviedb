import {ISetState} from "../types";

export interface IContext {
    theme:boolean,
    setTheme:ISetState<boolean>,
    genre:{ genre: string},
    setGenre:ISetState<{ genre:string }>
}