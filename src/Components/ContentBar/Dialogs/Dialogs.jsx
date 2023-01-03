import { Navigate } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import classes from './Dialogs.module.css'
import Message from './Message/Message';

function Dialogs(props) {

    let dialogs = props.dialogs.map( d => <DialogItem name={d.name} id={d.id}/> );
    let messages = props.messages.map( m => <Message id={m.id} message={m.message}/>);

    let onMessageChanged = (e) => {
        props.UpdateMessageText(e.target.value);
    };
    let onAddMessage = () => {
        props.AddMessage();
    };
    if (!props.isAuth) {return <Navigate to="/login"/>}

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {dialogs}
            </div>
            <div className={classes.messages}>
                {messages}
                <div>
                    <textarea onChange={onMessageChanged} value={props.messageValue}></textarea>
                    <button onClick={onAddMessage}>Add message</button>
                </div>
            </div>
        </div>
        
    );
}

export default Dialogs;