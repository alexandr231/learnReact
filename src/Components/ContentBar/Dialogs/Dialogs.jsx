import { Navigate } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import classes from './Dialogs.module.css'
import Message from './Message/Message';
import { Field, reduxForm } from 'redux-form'
import AddMessageReduxForm from './AddMessageReduxForm/AddMessageReduxForm';

function Dialogs(props) {

    let dialogs = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messages = props.messages.map(m => <Message id={m.id} message={m.message} />);

    if (!props.isAuth) { return <Navigate to="/login" /> }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {dialogs}
            </div>
            <div className={classes.messages}>
                {messages}
                <AddMessageReduxForm onSubmit={
                    (message) => {
                        props.AddMessage(message.newMessage);
                    }}></AddMessageReduxForm>
            </div>
        </div>

    );
}

export default Dialogs;