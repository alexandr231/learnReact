import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css'

function DialogItem(props) {
    return (
        <div className={classes.dialog}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

function Message(props) {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}

function Dialogs() {
    let dialogsData = [
        {id:1, name: 'Katya'},
        {id:2, name: 'Koshak'},
        {id:3, name: 'Sanya'},
        {id:4, name: 'Petr'}
    ]

    let messagesData = [
        {id:1, message: 'Hi'},
        {id:2, message: 'Bye'},
        {id:3, message: 'Sleep'},
        {id:4, message: 'Sie'}
    ]

    let dialogs = dialogsData.map( d => <DialogItem name={d.name} id={d.id}/> )
    let messages = messagesData.map( m => <Message id={m.id} message={m.message}/>)

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