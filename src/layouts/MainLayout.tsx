import React from 'react';
import {Outlet} from "react-router-dom";

import {Header} from "../components";
import {UseAppContext} from "../hooks";
import darkCss from './Dark.module.css';
import lightCss from './Light.module.css';

const MainLayout = () => {
    const {theme} = UseAppContext();

    return (
        <div>
            <Header/>
            <div className={theme ? lightCss.Background : darkCss.Background}>
                <Outlet/>
            </div>
        </div>
    );
};

export {MainLayout};