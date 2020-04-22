import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id:1, message: 'It is my first post', likesCount: 12},
                {id:2, message: 'I like to write posts in React! It is so cool!', likesCount: 11},
            ],
            newPostText: ''
        },
        dialogsPage: {
            messages: [
                {id:1, message: 'Hi'},
                {id:2, message: 'How is your it-kamasutra?'},
                {id:3, message: 'It is cool! I am happy to do this app.'},
                {id:4, message: 'Yo, nice!'},
            ],
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Sergey'},
                {id: 3, name: 'Ivan'},
            ],
            newMessageBody: ''
        },
        sidebar: {
            friends: [
                {id:1, avatar: 'https://www.blexar.com/avatar.png', name: 'Dimych'},
                {id:2, avatar: 'https://www.w3schools.com/howto/img_avatar.png', name: 'Sergey'},
                {id:3, avatar: 'https://www.w3schools.com/w3images/avatar6.png', name: 'Ivan'},
            ]
        }
    },
    _callSubscriber() {},

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;  // наблюдатель (патерн)
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;