import { actionCreatorAddPost, actionCreatorUpdateChangedText } from '../../../../Redux/profile-reducer';
import MainContent from './MainContent';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.postData,
        textValue: state.profilePage.textValue
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(actionCreatorAddPost());
        },
        UpdateChangedText: (text) => {
            dispatch(actionCreatorUpdateChangedText(text));
        }
    }
}
let MainContentContainer = connect(mapStateToProps, mapDispatchToProps)(MainContent);

export default MainContentContainer;