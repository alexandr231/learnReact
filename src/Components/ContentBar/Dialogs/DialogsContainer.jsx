import { actionCreatorAddMessage, actionCreatorUpdateMessageText } from '../../../Redux/dialogs-reducer';
import StoreContext from '../../../StoreContext';
import Dialogs from './Dialogs';

function DialogsContainer() {

    return (
        <StoreContext.Consumer> 
            { (store) => {

                let dialogs = store.getState().messagesPage.dialogsData;
                let messages = store.getState().messagesPage.messagesData;
            
                let messageValue = store.getState().messagesPage.messageValue;
            
                let UpdateMessageText = (text) => {
                    store.dispatch(actionCreatorUpdateMessageText(text));
                };
                let AddMessage = () => {
                    store.dispatch(actionCreatorAddMessage());
                };

                return (<Dialogs dialogs = {dialogs} messages = {messages} messageValue = {messageValue} 
                    UpdateMessageText = {UpdateMessageText} AddMessage = {AddMessage}></Dialogs>);
            }
            }
        </StoreContext.Consumer>
    );
}

export default DialogsContainer;