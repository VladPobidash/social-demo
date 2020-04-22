const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {i: 6, message: body}]
            };
        default:
            return state;
    }
}
export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody});

export default dialogsReducer;