import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import AddMessageForm from "./AddMessageForm/AddMessageForm";

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map( d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = state.messages.map( m => <Message message={m.message} />);

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }

    return (

        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                {  dialogsElements }
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <AddMessageForm onSubmit={addNewMessage} />
                </div>
            </div>
            <span className={s.someText}>It is beta version dialogs page.<br/>
                New functional in the next version.</span>
        </div>
    )
}

export default Dialogs;