import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Field, reduxForm} from "redux-form";
import s from './../Dialogs.module.css';
import {Textarea} from "../../common/FormsControls/FormsControls";
import React from "react";

const maxLength50 = maxLengthCreator(50);
const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} validate={[required, maxLength50]} name={'newMessageBody'} placeholder={'Enter your message'} />
            </div>
            <div>
                <button className={s.btn}>Send</button>
            </div>
        </form>
    )
}
export default reduxForm({form: 'dialogsMessage'})(AddMessageForm);