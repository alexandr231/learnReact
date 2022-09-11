import classes from './ProfileInfo.module.css';
import React from 'react';

function ProfileInfo(props) {

    let newPostElement = React.createRef();
    let addPost = () => {
        props.addPost();
    }
    let textChanged = () => {
        let text = newPostElement.current.value;
        props.updateChangedText(text);

    }

    return (
        <div className={classes.ProfileInfo}>
            <textarea onChange={textChanged} ref={newPostElement} value={props.textValue}></textarea>
            <button onClick={addPost}>hi</button>
            Main content
        </div>
    );
}

export default ProfileInfo;