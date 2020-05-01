import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import FriendsContainer from "../Friends/FriendsContainer";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/users' activeClassName={s.activeLink}>Users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/notes' activeClassName={s.activeLink}>Notes</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/games' activeClassName={s.activeLink}>Games</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings' activeClassName={s.activeLink}>Settings</NavLink>
            </div>
            {/*<div className={s.item + ' ' + s.friends}>*/}
            {/*    <NavLink to='/friends' activeClassName={s.activeLink}>Friends</NavLink>*/}
            {/*    <div>*/}
            {/*        <FriendsContainer />*/}
            {/*    </div>*/}
            {/*</div>*/}
        </nav>
    )
}

export default Navbar;