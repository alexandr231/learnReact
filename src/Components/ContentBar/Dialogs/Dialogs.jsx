import { NavLink } from 'react-router-dom';
import { actionCreatorAddMessage, actionCreatorUpdateMessageText } from '../../../Redux/state';
import DialogItem from './DialogItem/DialogItem';
import classes from './Dialogs.module.css'
import Message from './Message/Message';

function Dialogs(props) {

    let dialogs = props.state.dialogsData.map( d => <DialogItem name={d.name} id={d.id}/> );
    let messages = props.state.messagesData.map( m => <Message id={m.id} message={m.message}/>);

    let messageChanged = (e) => {
        props.dispatch(actionCreatorUpdateMessageText(e.target.value));
    };
    let addMessage = () => {
        props.dispatch(actionCreatorAddMessage());
    };

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {dialogs}
            </div>
            <div className={classes.messages}>
                {messages}
                <div>
                    <textarea onChange={messageChanged} value={props.state.messageValue}></textarea>
                    <button onClick={addMessage}>Add message</button>
                </div>
            </div>
        </div>
        
    );
}

export default Dialogs;