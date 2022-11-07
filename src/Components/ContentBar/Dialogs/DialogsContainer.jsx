import { actionCreatorAddMessage, actionCreatorUpdateMessageText } from '../../../Redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {
        dialogs: state.messagesPage.dialogsData,
        messages: state.messagesPage.messagesData,
        messageValue: state.messagesPage.messageValue
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        UpdateMessageText: (text) => {
            dispatch(actionCreatorUpdateMessageText(text));
        },
        AddMessage: () => {
            dispatch(actionCreatorAddMessage());
        }
    }
}

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;