import { Field, reduxForm } from 'redux-form'
import { maxLengthCreator, reqiured } from '../../utils/validators';
import { Input } from '../common/ReduxFormComponents/ReduxFormComponents';
import styles from '../common/ReduxFormComponents/ReduxFormComponents.module.css'

const maxLength30 = maxLengthCreator(30)

function LoginForm(props) {
    debugger;
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={"login"} component={Input} name="email" type="text" validate={[maxLength30, reqiured]}></Field>
        </div>
        <div>
            <Field placeholder={"password"} component={Input} name="password" type="password" validate={[maxLength30, reqiured]}></Field>
        </div>
        <div>
            <Field component="input" name="rememberMe" type="checkbox"></Field>
            remember me
        </div>
        <div>
            <button>login</button>
        </div>
        {props.error && <div className={styles.reduxFormComponent}>
            <span className={styles.loginError}>{props.error}</span>
        </div>
        }
    </form>
}

export default reduxForm({ form: 'login' })(LoginForm);