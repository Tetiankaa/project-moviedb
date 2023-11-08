import {useContext} from 'react';

import {Context} from "../hoc";
import {IContext} from "../interfaces";

const UseAppContext = () => {
    const {theme, setTheme} = useContext(Context) as IContext;
    return {
        theme,
        setTheme
    }
};

export {UseAppContext};