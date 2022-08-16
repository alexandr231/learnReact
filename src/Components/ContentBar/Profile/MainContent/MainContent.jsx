import classes from './MainContent.module.css';
import Post from './Posts/Post'

function MainContent() {
    return (
        <div className={classes.mainContent}>
            <textarea>ya</textarea>
            <button>hi</button>
            Main content
            <div className={classes.posts}>
                <Post message='No epic fail today, my friends, tis brilliantly clear that this one is in the bag.' />
                <Post message='Now, where did I put my snakeskin bag? Because this one, my friends, is in it!' />
                <Post message='Oh yeah, its in the bag!' />
                <Post message='This one is in the bag, and I dont mean the saddlebag. Who said anything about saddlebags?' />
                <Post message='You want a bag? I can get you a bag. What kind of bag?' />
            </div>
        </div>
    );
}

export default MainContent;