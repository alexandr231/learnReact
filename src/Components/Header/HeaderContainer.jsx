import { Component } from 'react';
import { SetAuthUserData, ToggleIsFetching, logout } from '../../Redux/auth-reducer';
import Preloader from '../common/Preloader/Preloader'
import Header from './Header'
import { connect } from 'react-redux';
import { compose } from 'redux';

class HeaderContainer extends Component {
  render() {
    return this.props.isFetching ?
        <Preloader></Preloader>  :
        <Header {...this.props}></Header>
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

export default compose(
    connect(mapStateToProps, {
        SetAuthUserData,
        ToggleIsFetching,
        logout
    })
)(HeaderContainer);
