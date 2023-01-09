import { Field, reduxForm } from 'redux-form'
import { maxLengthCreator, reqiured } from '../../../../utils/validators';
import { Input } from '../../../common/ReduxFormComponents/ReduxFormComponents';

const maxLength15 = maxLengthCreator(15)

function AddPostForm(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input} validate={[maxLength15, reqiured]} name="newPostText" type="text"></Field>
            </div>
            <div>
                <button>add post</button>
            </div>
        </form>
    )
}

export default reduxForm({ form: 'addPost' })(AddPostForm);
