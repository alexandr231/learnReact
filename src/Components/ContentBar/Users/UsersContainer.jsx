import { Follow, Unfollow, SetCurrentPage, ToggleIsFetching, ToggleFollowingInProgress, getUsers } from '../../../Redux/users-reducer';
import { connect } from 'react-redux';
import axios from 'axios';import React, { Component } from 'react';
import Users from './Users';
import Preloader from '../../Preloader/Preloader';
import { withAuthRedirect } from '../../../HOC/withAuthRedirect';
import { compose } from 'redux';

class UsersContainer extends Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage,this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return this.props.isFetching 
        ? <Preloader/>
        : <Users totalCount={this.props.totalCount} pageSize={this.props.pageSize} currentPage={this.props.currentPage}
        users={this.props.users} onPageChanged={this.onPageChanged} Unfollow={this.props.Unfollow}
        Follow={this.props.Follow} FollowingInProgress={this.props.FollowingInProgress} 
        ToggleFollowingInProgress = {this.props.ToggleFollowingInProgress} getUsers= {this.props.getUsers}></Users>
                
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        totalCount: state.usersPage.totalCount,
        isFetching: state.usersPage.isFetching,
        FollowingInProgress: state.usersPage.FollowingInProgress,
    }
}

export default compose(
    connect(mapStateToProps, {
        Follow,
        Unfollow,
        SetCurrentPage,
        ToggleIsFetching,
        ToggleFollowingInProgress,
        getUsers
    }),
    withAuthRedirect
)(UsersContainer);