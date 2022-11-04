import { actionCreatorAddMessage, actionCreatorUpdateMessageText } from '../../../Redux/dialogs-reducer';
import Dialogs from './Dialogs';

function DialogsContainer(props) {

    let dialogs = props.store.getState().messagesPage.dialogsData;
    let messages = props.store.getState().messagesPage.messagesData;

    let messageValue = props.store.getState().messagesPage.messageValue;

    let UpdateMessageText = (text) => {
        props.store.dispatch(actionCreatorUpdateMessageText(text));
    };
    let AddMessage = () => {
        props.store.dispatch(actionCreatorAddMessage());
    };

    return (
        <Dialogs dialogs = {dialogs} messages = {messages} messageValue = {messageValue} 
        UpdateMessageText = {UpdateMessageText} AddMessage = {AddMessage}></Dialogs>
    );
}

export default DialogsContainer;