import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import React from "react";

let state = {
    posts: [
        {id:1, message: 'It is my first post', likesCount: 12},
        {id:2, message: 'I like to write posts in React! It is so cool!', likesCount: 11},
    ]
};

it('length of posts should be incremented', () => {
    // 1. test data
    let action = addPostActionCreator('works.text.com');
    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.posts.length).toBe(3);
} );
it('message of new posts should be correct', () => {
    // 1. test data
    let action = addPostActionCreator('works.text.com');
    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.posts[2].message).toBe('works.text.com');
} );
it('after deleting length of message should be decremented', () => {
    // 1. test data
    let action = deletePost(1);
    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.posts.length).toBe(1);
} );