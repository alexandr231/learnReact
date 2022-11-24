import { followAC, unfollowAC, setUsersAC, setTotalCountAC, setCurrentPageAC, setPageSizeAC } from '../../../Redux/users-reducer';
import { connect } from 'react-redux';
import axios from 'axios';
import React, { Component } from 'react';
import Users from './Users';

class UsersContainer extends Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.SetUsers(response.data.items);
            //this.props.SetTotalCount(response.data.totalCount);
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.SetCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.SetUsers(response.data.items);
        });
    }

    render() {
        return <Users totalCount={this.props.totalCount} pageSize={this.props.pageSize} currentPage={this.props.currentPage}
            users={this.props.users} onPageChanged={this.onPageChanged} Unfollow={this.props.Unfollow}
            Follow={this.props.Follow}></Users>
    }
}

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


export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);