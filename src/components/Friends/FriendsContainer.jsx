import React from "react";
import {connect} from "react-redux";
import Friends from "./Friends";

let mstp = state => {
    return {
        friends: state.sidebar.friends
    }
}
let mdtp = () => {
    return {

    }
}

const FriendsContainer = connect(mstp, mdtp)(Friends);

export default FriendsContainer;