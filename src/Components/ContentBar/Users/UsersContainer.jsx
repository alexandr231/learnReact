import { followAC, unfollowAC, setUsersAC, setTotalCountAC, setCurrentPageAC, setPageSizeAC } from '../../../Redux/users-reducer';
import Users from './Users';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        totalCount: state.usersPage.totalCount
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
        },
        SetTotalCount: (totalCount) => {
            dispatch(setTotalCountAC(totalCount));
        },
        SetCurrentPage: (page) => {
            dispatch(setCurrentPageAC(page));
        },
        SetPageSize: (pageSize) => {
            dispatch(setPageSizeAC(pageSize));
        },
    }
}


let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;