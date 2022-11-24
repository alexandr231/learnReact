import classes from './Profile.module.css';
import MainContentContainer from './MainContent/MainContentContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

function Profile(props) {
    return (
        <div className={classes.content}>
            <ProfileInfo profile={props.profile}/>
            <MainContentContainer/>
        </div>
    );
}

export default Profile;