import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={s.header}>
        <img src='https://img2.freepng.ru/20181212/jpy/kisspng-lion-logo-illustration-design-clip-art-animales-leon-diceo-degradado-new-nuevo-simple-l-5c11045b87c0a5.4635097315446190995561.jpg' />

        <div className={s.loginBlock}>
            { props.isAuth
                ? <div>{props.login + ' ' + props.id} - <button onClick={props.logout}>Log out</button></div>
                : <NavLink to={'/Login'}>Login</NavLink>
            }
        </div>

    </header>
}

export default Header;