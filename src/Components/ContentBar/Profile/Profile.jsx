import classes from './Profile.module.css';
import MainContentContainer from './MainContent/MainContentContainer';

function Profile(props) {
    return (
        <div className={classes.content}>
            <MainContentContainer store={props.store}/>
        </div>
    );
}

export default Profile;