import classes from './Profile.module.css';

function Profile() {
    return (
        <div className={classes.content}>
            <div>
                Main content
                <div>Posts</div>
                <div>Comments</div>
            </div>
        </div>
    );
}

export default Profile;