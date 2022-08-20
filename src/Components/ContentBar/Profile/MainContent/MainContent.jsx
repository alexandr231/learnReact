import classes from './MainContent.module.css';
import Post from './Posts/Post'
import ProfileInfo from './ProfileInfo/ProfileInfo';

function MainContent(props) {

    let posts = props.state.postData.map( p => <Post id={p.id} message={p.message} />)

    return (
        <div className={classes.mainContent}>
            <ProfileInfo/>
            <div className={classes.posts}>
                {posts}
            </div>
        </div>
    );
}

export default MainContent;