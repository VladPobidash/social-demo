import React from "react";
import s from './../Dialogs.module.css';

const Message = (props) => {

    return (
        <div className={s.item}>
            <div className={s.avatar}>
                <img src='https://www.w3schools.com/w3images/avatar2.png'/>
            </div>
            <div className={s.message}>{props.message}</div>
        </div>
    )
}

export default Message;