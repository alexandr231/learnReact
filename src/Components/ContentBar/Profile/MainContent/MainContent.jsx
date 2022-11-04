import classes from './MainContent.module.css';
import Post from './Posts/Post'
import React from 'react';
import { actionCreatorAddPost, actionCreatorUpdateChangedText } from '../../../../Redux/profile-reducer';

function MainContent(props) {

    let posts = props.state.postData.map(p => <Post id={p.id} message={p.message} />)

    let newPostElement = React.createRef();
    let addPost = () => {
        props.dispatch(actionCreatorAddPost());
    }
    let textChanged = () => {
        let text = newPostElement.current.value;
        props.dispatch(actionCreatorUpdateChangedText(text));
    }

    return (
        <div className={classes.mainContent}>
            <div className={classes.ProfileInfo}>
                <textarea onChange={textChanged} ref={newPostElement} value={props.state.textValue}></textarea>
                <button onClick={addPost}>Add post</button>
                Main content
            </div>
            <div className={classes.posts}>
                {posts}
            </div>
        </div>
    );
}

export default MainContent;