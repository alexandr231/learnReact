import { Field, reduxForm } from 'redux-form'
import { maxLengthCreator, reqiured } from '../../../../utils/validators';
import { TextArea } from '../../../common/ReduxFormComponents/ReduxFormComponents';

const maxLength15 = maxLengthCreator(15)

function AddMessageForm(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"message"} component={TextArea} validate={[maxLength15, reqiured]} name="newMessage" type="text"></Field>
            </div>
            <div>
                <button>add message</button>
            </div>
        </form>
    )
}

export default reduxForm({ form: 'addMessage' })(AddMessageForm);

