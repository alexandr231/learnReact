import classes from './Profile.module.css';
import MainContent from './MainContent/MainContent';

function Profile() {
    return (
        <div className={classes.content}>
            <MainContent/>
        </div>
    );
}

export default Profile;