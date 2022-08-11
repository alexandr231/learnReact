import classes from './Navbar.module.css';

function Navbar() {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>Profile</div>
            <div className={classes.item}>Friends</div>
            <div className={classes.item}>Messenges</div>
            <div className={`${classes.item} ${classes.active}`}>Settings</div>
        </nav>
    );
}

export default Navbar;