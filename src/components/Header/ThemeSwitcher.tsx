import React, {FC} from 'react';

import lightCss from "./Light.module.css";
import darkCss from "./Dark.module.css";
import {ISetState} from "../../types";

interface IProps{
    theme:boolean,
    setTheme:ISetState<boolean>
}
const ThemeSwitcher:FC<IProps> = ({theme, setTheme}) => {
    
    const containerClass = theme ? lightCss.Container : darkCss.Container;
    const switchClass = theme ? lightCss.Switch : darkCss.Switch;
    const sliderClass = theme ? lightCss.Slider : darkCss.Slider;

    return (
        <div className={containerClass}>
            <span style={{ color: theme ? "yellow" : "grey" }}>☀︎</span>
            <div className={switchClass}>
                <label className={sliderClass}>
                    <input type="checkbox" onChange={() => setTheme(!theme)} />
                </label>
            </div>
            <span style={{ color: theme ? "grey" : "#c96dfd" }}>☽</span>
        </div>
    );
};

export {ThemeSwitcher};