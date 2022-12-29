import axios from 'axios'
import React, { Component } from 'react'
import {SetAuthUserData, ToggleIsFetching} from '../../Redux/auth-reducer'
import Preloader from '../Preloader/Preloader'
import Header from './Header'
import { connect } from 'react-redux';

class HeaderContainer extends Component {
  render() {
    return this.props.isFetching ?
        <Preloader></Preloader>  :
        <Header {...this.props}></Header>
  }
  componentDidMount() {
    this.props.ToggleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
    }).then(response => {
        if (response.data.resultCode === 0) {
            let {email, id, login} = response.data.data
            this.props.SetAuthUserData(login, email, id)
        }
        this.props.ToggleIsFetching(false);
    });
  }
}


let mapStateToProps = (state) => {
    return {
        userId: state.auth.userId,
        login: state.auth.login,
        email: state.auth.email,
        isFetching: state.auth.isFetching,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {
    SetAuthUserData,
    ToggleIsFetching
})(HeaderContainer);
