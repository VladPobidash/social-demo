import React from "react";
import styles from "./users.module.css";
import userPhoto from '../../assects/images/user.png';
import {NavLink} from "react-router-dom";

let User = ({user, followingInProgress, unfollow, follow}) => {
    return (
        <div>
            <div className={styles.user}>
                <div className={styles.avatar}>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto}
                             className={styles.userPhoto}/>
                    </NavLink>
                </div>

                <div className={styles.info}>
                    <div><strong>{user.name}</strong></div>
                    <div>{user.status}</div>
                </div>

                <div>
                    {user.followed
                        ? <button className={styles.btn} disabled={followingInProgress
                            .some(id => id === user.id)}
                                  onClick={() => { unfollow(user.id) }}>
                            Unfollow</button>
                        : <button className={styles.btn} disabled={followingInProgress.some(id => id === user.id)}
                                  onClick={() => { follow(user.id) }}>
                            Follow</button>}
                </div>
            </div>
        </div>
    )
}

export default User;