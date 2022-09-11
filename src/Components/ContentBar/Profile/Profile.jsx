import classes from './Profile.module.css';
import MainContent from './MainContent/MainContent';

function Profile(props) {
    return (
        <div className={classes.content}>
            <MainContent state = {props.state} addPost = {props.addPost} updateChangedText={props.updateChangedText}/>
        </div>
    );
}

export default Profile;