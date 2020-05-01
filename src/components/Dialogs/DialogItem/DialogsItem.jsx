import React from "react";
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <div className={s.avatar}>
                <img src='https://www.w3schools.com/w3images/avatar2.png'/>
            </div>
            <NavLink className={s.name} to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;