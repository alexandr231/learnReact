import classes from './MainContent.module.css';
import Post from './Posts/Post'
import { Field, reduxForm } from 'redux-form'

function MainContent(props) {

    let posts = props.posts.map(p => <Post id={p.id} message={p.message} />)

    return (
        <div className={classes.mainContent}>
            <AddPostReduxForm onSubmit={(newPost) => {props.AddPost(newPost.newPostText);}}></AddPostReduxForm>
            <div className={classes.posts}>
                {posts}
            </div>
        </div>
    );
}

function AddPostForm(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="input" name="newPostText" type="text"></Field>
            </div>
            <div>
                <button>add post</button>
            </div>
        </form>
    )
}

let AddPostReduxForm = reduxForm({ form: 'addPost' })(AddPostForm);

export default MainContent;