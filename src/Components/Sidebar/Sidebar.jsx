import { NavLink } from 'react-router-dom';
import classes from './Sidebar.module.css';

function Sidebar() {
    return (
        <nav className={classes.sidebar}>
            <div className={classes.item}>
                <NavLink to='/profile'>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/dialogs/'>Messanges</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/news'>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/music'>Music</NavLink>
            </div>
            <div className={`${classes.item} ${classes.active}`}>
                <NavLink to='/settings' className={classes.activeLink}>Settings</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/users'>Users</NavLink>
            </div>
        </nav>
    );
}

export default Sidebar;