import { Field, reduxForm } from 'redux-form'
import { maxLengthCreator, reqiured } from '../../utils/validators';
import { Input } from '../common/ReduxFormComponents/ReduxFormComponents';

const maxLength15 = maxLengthCreator(15)

function LoginForm(props) {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={"login"} component={Input} name="login" type="text" validate={[maxLength15, reqiured]}></Field>
        </div>
        <div>
            <Field placeholder={"password"} component={Input} name="password" type="text" validate={[maxLength15, reqiured]}></Field>
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

export default reduxForm({ form: 'login' })(LoginForm);