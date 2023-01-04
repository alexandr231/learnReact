import { UpdateMessageText, AddMessage } from '../../../Redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import { withAuthRedirect } from '../../../HOC/withAuthRedirect';

let mapStateToProps = (state) => {
    
    return {
        dialogs: state.messagesPage.dialogsData,
        messages: state.messagesPage.messagesData,
        messageValue: state.messagesPage.messageValue,
    }
}

let DialogsContainer = connect(mapStateToProps, {
    UpdateMessageText,
    AddMessage
})(withAuthRedirect(Dialogs));

export default DialogsContainer;