import React from "react";
import s from './Games.module.css';
import Tetris from "./Tetris/Tetris";

const Games = (props) => {
    return (
        <div className={s.body}>
            <Tetris />
        </div>
    )
}

export default Games;