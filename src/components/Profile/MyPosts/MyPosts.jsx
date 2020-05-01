import React from 'react';
import s from'./MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm, reset} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div >
                <Field component={Textarea} name="newPostText" validate={[required, maxLength10]} placeholder={'Post message'} />
            </div>
            <div>
                <button className={s.btn}>Add Post</button>
            </div>
        </form>
    )
}
const ProfileAddNewPostForm = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm);

const MyPosts = React.memo((props) => {
    let postsElements =
        [...props.posts]
            .reverse()
            .map( p => <Post key={p.id} message={p.message} likesCount={p.likesCount} />);

    let onAddPost = (values, dispatch) => {
        dispatch(reset('postMessage'))
        props.addPost(values.newPostText);
    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <ProfileAddNewPostForm onSubmit={onAddPost} />
            </div>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    ) 
});

export default MyPosts;