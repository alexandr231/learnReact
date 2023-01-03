import { UpdateMessageText, AddMessage } from '../../../Redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    
    return {
        dialogs: state.messagesPage.dialogsData,
        messages: state.messagesPage.messagesData,
        messageValue: state.messagesPage.messageValue,
        isAuth: state.auth.isAuth,
    }
}


let DialogsContainer = connect(mapStateToProps, {
    UpdateMessageText,
    AddMessage
})(Dialogs);

export default DialogsContainer;