import React from "react";
import s from './Tetris.module.css'
import mainJS from  './index.js'

const Tetris = () => {
    return (
        <div className={s.body}>
            <script src={mainJS()}></script>
            <h1>
                <span className={s.T}>T</span>
                <span className={s.E}>E</span>
                <span className={s.T}>T</span>
                <span className={s.R}>R</span>
                <span className={s.I}>I</span>
                <span className={s.S}>S</span>
            </h1>
        </div>
    )
}

export default Tetris;