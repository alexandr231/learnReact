import classes from './../Dialogs.module.css'
import React from 'react';

function Message(props) {
    let newMessageElement = React.createRef();
    let addMessage = () => {
        let text = newMessageElement.current.value;
        alert(text);
    }
    return (
        <div className={classes.message}>
            <textarea ref={newMessageElement}>{props.message}</textarea>
            <button onClick={addMessage}>Add Message</button>
        </div>
    )
}

export default Message;