import React from 'react';
import {addPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mstp = state => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mdtp = dispatch => {
    return {
        addPost: (newPostText) => {
            dispatch( addPostActionCreator(newPostText) );
        }
    }
}
const MyPostsContainer = connect(mstp, mdtp)(MyPosts);

export default MyPostsContainer;