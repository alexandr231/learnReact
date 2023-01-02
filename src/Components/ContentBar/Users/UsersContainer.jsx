import { Follow, Unfollow, SetUsers, SetTotalCount, SetCurrentPage, SetPageSize, ToggleIsFetching } from '../../../Redux/users-reducer';
import { connect } from 'react-redux';
import axios from 'axios';
import React, { Component } from 'react';
import Users from './Users';
import Preloader from '../../Preloader/Preloader';
import { UsersAPI } from '../../../API/API';

class UsersContainer extends Component {

    componentDidMount() {
        this.props.ToggleIsFetching(true);
        UsersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(response => {
            this.props.SetUsers(response.items);
            this.props.ToggleIsFetching(false);
            //this.props.SetTotalCount(response.data.totalCount);
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.ToggleIsFetching(true);
        this.props.SetCurrentPage(pageNumber);
        UsersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(response => {
            this.props.SetUsers(response.items);
            this.props.ToggleIsFetching(false);
        });
    }

    render() {
        return this.props.isFetching 
        ? <Preloader/>
        : <Users totalCount={this.props.totalCount} pageSize={this.props.pageSize} currentPage={this.props.currentPage}
        users={this.props.users} onPageChanged={this.onPageChanged} Unfollow={this.props.Unfollow}
        Follow={this.props.Follow}></Users>
                
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        totalCount: state.usersPage.totalCount,
        isFetching: state.usersPage.isFetching,
    }
}

export default connect(mapStateToProps, {
    Follow,
    Unfollow,
    SetUsers,
    SetTotalCount,
    SetCurrentPage,
    SetPageSize,
    ToggleIsFetching
})(UsersContainer);