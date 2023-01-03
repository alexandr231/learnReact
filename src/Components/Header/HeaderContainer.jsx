import axios from 'axios'
import React, { Component } from 'react'
import {auth, SetAuthUserData, ToggleIsFetching} from '../../Redux/auth-reducer'
import Preloader from '../Preloader/Preloader'
import Header from './Header'
import { connect } from 'react-redux';
import { AuthAPI } from '../../API/API'

class HeaderContainer extends Component {
  render() {
    return this.props.isFetching ?
        <Preloader></Preloader>  :
        <Header {...this.props}></Header>
  }
  componentDidMount() {
    this.props.auth();
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
    ToggleIsFetching,
    auth
})(HeaderContainer);
