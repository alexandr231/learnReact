import React from 'react'
import { Field, reduxForm } from 'redux-form'

function LoginForm(props) {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={"login"} component="input" name="login" type="text"></Field>
        </div>
        <div>
            <Field placeholder={"password"} component="input" name="password" type="text"></Field>
        </div>
        <div>
            <Field component="input" name="rememberMe" type="checkbox"></Field>
            remember me
        </div>
        <div>
            <button>login</button>
        </div>
    </form>
}

let LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

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
