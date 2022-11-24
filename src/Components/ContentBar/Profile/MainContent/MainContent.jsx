import classes from './MainContent.module.css';
import Post from './Posts/Post'

function MainContent(props) {

    let posts = props.posts.map(p => <Post id={p.id} message={p.message} />)

    let onAddPost = () => {
        props.AddPost();
    }
    let onTextChanged = (e) => {
        let text = e.target.value;
        props.UpdateChangedText(text);
    }

    return (
        <div className={classes.mainContent}>
            <div className={classes.ProfileInfo}>
                <textarea onChange={onTextChanged} value={props.textValue}></textarea>
                <button onClick={onAddPost}>Add post</button>
                Main content
            </div>
            <div className={classes.posts}>
                {posts}
            </div>
        </div>
    );
}

export default MainContent;