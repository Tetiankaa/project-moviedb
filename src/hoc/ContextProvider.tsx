import React, {createContext, FC, PropsWithChildren, useState} from 'react';

import {IContext} from "../interfaces";

const Context = createContext<IContext | null>(null);
interface IProps extends PropsWithChildren{}
const ContextProvider:FC<IProps> = ({children}) => {
    const [theme, setTheme] = useState<boolean>(true);
    return (
       <Context.Provider value={{theme, setTheme}}>
           {children}
       </Context.Provider>
    );
};

export {ContextProvider,Context};