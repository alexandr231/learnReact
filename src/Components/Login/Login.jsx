import React from 'react'
import LoginReduxForm from './LoginReduxForm';

export default function Login(props) {
    const loginSubmit = (loginData) => {
        console.log(loginData);
    }
    return (
        <div>
            <h1>Login</h1>
            <div>sadasd</div>
            <LoginReduxForm onSubmit={loginSubmit}></LoginReduxForm>
        </div>
    )
}
