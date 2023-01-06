import classes from './Profile.module.css';
import MainContentContainer from './MainContent/MainContentContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

function Profile(props) {
    return (
        <div className={classes.content}>
            <ProfileInfo profile={props.profile} updateStatus={props.updateStatus} status={props.status}/>
            <MainContentContainer/>
        </div>
    );
}

export default Profile;