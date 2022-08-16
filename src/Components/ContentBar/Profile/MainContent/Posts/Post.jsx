import classes from './Post.module.css';

function Post(props) {
    return (
        <div className={classes.post}>
            <img src='https://i.ytimg.com/vi/VRt74MA5Kto/maxresdefault.jpg'></img>
            { props.message }
            <button className={classes.buttonLike}>like</button>
        </div>
    );
}

export default Post;