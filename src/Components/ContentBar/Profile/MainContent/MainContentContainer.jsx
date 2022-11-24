import { AddPost, UpdateChangedText } from '../../../../Redux/profile-reducer';
import MainContent from './MainContent';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.postData,
        textValue: state.profilePage.textValue
    }
}

let MainContentContainer = connect(mapStateToProps, {
    AddPost,
    UpdateChangedText
})(MainContent);

export default MainContentContainer;