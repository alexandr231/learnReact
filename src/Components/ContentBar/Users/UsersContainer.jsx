import { followAC, unfollowAC, setUsersAC } from '../../../Redux/users-reducer';
import Users from './Users';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        Follow: (userId) => {
            dispatch(followAC(userId));
        },
        Unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        SetUsers: (users) => {
            dispatch(setUsersAC(users));
        }
    }
}

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;