import {ISetState} from "../types";

export interface IContext {
    theme:boolean,
    setTheme:ISetState<boolean>
}