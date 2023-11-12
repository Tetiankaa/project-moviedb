import React, {createContext, FC, PropsWithChildren, useState} from 'react';

import {IContext} from "../interfaces";

const Context = createContext<IContext>(null);
interface IProps extends PropsWithChildren{}
const ContextProvider:FC<IProps> = ({children}) => {
    const [theme, setTheme] = useState<boolean>(true);
    const [genre, setGenre] = useState({genre:null});

    return (
       <Context.Provider value={{theme, setTheme, genre,setGenre}}>
           {children}
       </Context.Provider>
    );
};

export {ContextProvider,Context};