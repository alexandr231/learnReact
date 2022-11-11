import classes from './Users.module.css';

function Users(props) {

    if(props.users.length === 0) {
        props.SetUsers( [
            {
                id: 1, fullName: "Pavel Krasnov", followed: true, status: "loh", location: { city: "Cheboksary", country: "Russia" },
                avaURL: "https://volleyball.ir/wp-content/uploads/2016/07/20120812153730Flag_of_Russia.jpg"
            },
            {
                id: 2, fullName: "Petr Petrov", followed: false, status: "loh", location: { city: "Cheboksary", country: "Russia" },
                avaURL: "https://volleyball.ir/wp-content/uploads/2016/07/20120812153730Flag_of_Russia.jpg"
            },
            {
                id: 3, fullName: "Maksemen Sergeev", followed: true, status: "loh", location: { city: "Cheboksary", country: "Russia" },
                avaURL: "https://volleyball.ir/wp-content/uploads/2016/07/20120812153730Flag_of_Russia.jpg"
            },
        ] )
    }

    return <div className={classes.Users}>
        {props.users.map(u => <div key={u.id} className={classes.avaFollow}>
            <div>
                <img src={u.avaURL} className={classes.ava}></img>
                {u.followed
                    ? <button onClick={() => props.Unfollow(u.id)}>Unfollow</button>
                    : <button onClick={() => props.Follow(u.id)}>Follow</button>}
            </div>
            <div className={classes.description}>
                <div className={classes.nameStatus}>
                    <div className={classes.fullName}>{u.fullName}</div>
                    <div className={classes.status}>{u.status}</div>
                </div>
                <div className={classes.location}>
                    <div className={classes.city}>{u.location.city}</div>
                    <div className={classes.country}>{u.location.country}</div>
                </div>
            </div>
        </div>
        )
        }
    </div>
}

export default Users;