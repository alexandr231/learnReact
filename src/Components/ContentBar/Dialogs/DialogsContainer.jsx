import { AddMessage } from '../../../Redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import { withAuthRedirect } from '../../../HOC/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
    
    return {
        dialogs: state.messagesPage.dialogsData,
        messages: state.messagesPage.messagesData,
    }
}

export default compose(
    connect(mapStateToProps, {
        AddMessage
    }),
    withAuthRedirect
)(Dialogs);