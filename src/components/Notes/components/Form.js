import React, {useContext, useState} from "react"
import {AlertContext} from "../context/alert/alertContext";
import {FirebaseContext} from "../context/firebase/firebaseContext";

export const Form = () => {
    const [value, setValue] = useState('')
    const alert = useContext(AlertContext)
    const firebase = useContext(FirebaseContext)

    const submitHandler = (event) => {
        event.preventDefault()

        if (value.trim()) {
            firebase.addNote(value.trim()).then(() => {
                alert.show('Notes has created', 'success')
            }).catch(() => {
                alert.show('Something gone wrong', 'danger')
            })
            setValue('')
        } else {
            alert.show('Enter a note name')
        }
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder='Enter a note name'
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />

            </div>
        </form>
    )
}