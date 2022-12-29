import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

function Header(props) {
    return (
        <header className={classes.header}>
            <img src='https://avavatar.ru/images/original/3/mhesCQc0xlq7DgTp.jpg'></img>
            <div>Name</div>
            <div>Home</div>
            <div>About</div>
            <div>
                {props.isAuth ?
                    props.login
                    :<NavLink to={'/login'} className={classes.login}>Login</NavLink>}
            </div>
        </header>
    );
}
export default Header;