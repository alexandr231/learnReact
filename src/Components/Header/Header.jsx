import classes from './Header.module.css';

function Header() {
    return (
        <header className={classes.header}>
            <img src='https://avavatar.ru/images/original/3/mhesCQc0xlq7DgTp.jpg'></img>
            <div>Name</div>
            <div>Home</div>
            <div>About</div>
        </header>
    );
}
export default Header;