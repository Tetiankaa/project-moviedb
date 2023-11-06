import React, {FC} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleUser} from "@fortawesome/free-solid-svg-icons";

import lightCss from "./Light.module.css";
import darkCss from "./Dark.module.css";

interface IProps{
    theme:boolean
}
const UserInfo:FC<IProps> = ({theme}) => {
    return (
        <div className={theme ? `${lightCss.User}` : `${darkCss.User}`}>
            <FontAwesomeIcon icon={faCircleUser} />
            <p>Site_User_123</p>
        </div>
    );
};

export {UserInfo};