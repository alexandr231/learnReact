import classes from './ProfileInfo.module.css';
import React from 'react';
import { actionCreatorAddPost, actionCreatorUpdateChangedText } from '../../../../../Redux/state';

function ProfileInfo(props) {

    let newPostElement = React.createRef();
    let addPost = () => {
        props.dispatch(actionCreatorAddPost());
    }
    let textChanged = () => {
        let text = newPostElement.current.value;
        props.dispatch(actionCreatorUpdateChangedText(text));
    }

    return (
        <div className={classes.ProfileInfo}>
            <textarea onChange={textChanged} ref={newPostElement} value={props.textValue}></textarea>
            <button onClick={addPost}>Add post</button>
            Main content
        </div>
    );
}

export default ProfileInfo;