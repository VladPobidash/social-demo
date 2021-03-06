import React from 'react';
import s from'./Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg' />
            <div className={s.text}>
                {props.message}
            </div>
            <div>
                <span className={s.likes}>like</span>{props.likesCount}
            </div>
        </div>
    ) 
}

export default Post;