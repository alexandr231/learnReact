import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import classes from './Dialogs.module.css'
import Message from './Message/Message';

function Dialogs(props) {

    let dialogs = props.state.dialogsData.map( d => <DialogItem name={d.name} id={d.id}/> )
    let messages = props.state.messagesData.map( m => <Message id={m.id} message={m.message}/>)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {dialogs}
            </div>
            <div className={classes.messages}>
                {messages}
            </div>
        </div>
    );
}

export default Dialogs;