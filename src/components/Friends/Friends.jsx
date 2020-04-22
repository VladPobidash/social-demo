import React from "react";
import s from './Friends.module.css';
import Friend from "./Friend/Friend";

const Friends = (props) => {
    let friend = props.friends.map( f => <Friend avatar={f.avatar} name={f.name} id={f.id} />);

    return (
        <div className={s.friends}>
            <div className={s.friendsItems}>
                { friend }
            </div>
        </div>
    )
}

export default Friends;