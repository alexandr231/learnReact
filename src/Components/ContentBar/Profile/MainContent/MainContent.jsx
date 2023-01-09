import classes from './MainContent.module.css';
import Post from './Posts/Post'
import AddPostReduxForm from './AddPostReduxForm'


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

export default MainContent;