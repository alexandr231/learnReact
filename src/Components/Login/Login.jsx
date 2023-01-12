import React from 'react'
import { connect } from 'react-redux';
import LoginReduxForm from './LoginReduxForm';
import {login, logout} from '../../Redux/auth-reducer'
import { Navigate } from 'react-router-dom';

function Login(props) {
    const loginSubmit = (loginData) => {
        let {email, password, rememberMe} = loginData;
        props.login(email, password, rememberMe);
    }

    if (props.isAuth) return <Navigate to='/profile'/>

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={loginSubmit}></LoginReduxForm>
        </div>
    )
}
let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {login, logout})(Login);