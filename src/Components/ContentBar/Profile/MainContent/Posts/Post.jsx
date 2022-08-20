import classes from './Post.module.css';

function Post(props) {

    return (
        <div className={classes.post}>
            <img src='https://i.ytimg.com/vi/VRt74MA5Kto/maxresdefault.jpg'></img>
            <div className='PostMessage'>
                {props.message}
            </div>
            <button className={classes.buttonLike}>like</button>
        </div>
    );
}

export default Post;