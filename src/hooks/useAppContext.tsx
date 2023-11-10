import {useContext} from 'react';

import {Context} from "../hoc";
import {IContext} from "../interfaces";

const UseAppContext = () => {
    const {theme, setTheme,genre, setGenre} = useContext(Context) as IContext;
    return {
        theme,
        setTheme,
        genre,
        setGenre
    }
};

export {UseAppContext};