import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import logo from '../../assects/images/logo.png';

const Header = (props) => {
    return <header className={s.header}>
        <img src={logo} />

        <div className={s.loginBlock}>
            { props.isAuth
                ? <div>{props.login} <button className={s.btn} onClick={props.logout}>Log out</button></div>
                : <NavLink to={'/Login'}>Login</NavLink>
            }
        </div>

    </header>
}

export default Header;