import { AddPost, } from '../../../../Redux/profile-reducer';
import MainContent from './MainContent';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.postData,
    }
}

let MainContentContainer = connect(mapStateToProps, {
    AddPost,
})(MainContent);

export default MainContentContainer;