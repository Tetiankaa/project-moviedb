import React from 'react';
import {Outlet} from "react-router-dom";

import {Header} from "../components";
import style from './Style.module.css';


const MainLayout = () => {

    return (
        <div>
            <Header/>
            <div className={style.Container}>
                <Outlet/>
            </div>
        </div>
    );
};

export {MainLayout};