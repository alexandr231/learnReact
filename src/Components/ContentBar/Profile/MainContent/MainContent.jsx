import classes from './MainContent.module.css';
import Post from './Posts/Post'
import ProfileInfo from './ProfileInfo/ProfileInfo';

function MainContent() {
    let postData = [
        {id:1, message:'No epic fail today, my friends, tis brilliantly clear that this one is in the bag.' },
        {id:2, message:'Now, where did I put my snakeskin bag? Because this one, my friends, is in it!' },
        {id:3, message:'Oh yeah, its in the bag!' },
        {id:4, message:'This one is in the bag, and I dont mean the saddlebag. Who said anything about saddlebags?' },
        {id:5, message:'Lost' },
    ]

    return (
        <div className={classes.mainContent}>
            <ProfileInfo/>
            <div className={classes.posts}>
                <Post id={postData[0].id} message={postData[0].message} />
                <Post id={postData[1].id} message={postData[1].message} />
                <Post id={postData[2].id} message={postData[2].message} />
                <Post id={postData[3].id} message={postData[3].message} />
                <Post id={postData[4].id} message={postData[4].message} />
            </div>
        </div>
    );
}

export default MainContent;