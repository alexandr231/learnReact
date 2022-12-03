import React from 'react'
import { NavLink } from 'react-router-dom';
import classes from './Users.module.css';

function Users(props) {

    let pages = [];
    let pagesCount = Math.ceil(props.totalCount / props.pageSize);
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return <div className={classes.Users}>

        {pages.map(p => {
            return <span className={p === props.currentPage && classes.selectedPage}
                onClick={(e) => { props.onPageChanged(p) }}>{p}</span>
        })}

        {props.users.map(u => <div key={u.id} className={classes.avaFollow}>
            <div>
                <NavLink to={'/profile/' + u.id}>
                    <img src={u.photos.small != null
                        ? u.photos.small
                        : "https://avatars.mds.yandex.net/i?id=8612e9d6865f27632476a0c7e39237f0def4f025-5869170-images-thumbs&n=13&exp=1"}
                        className={classes.ava}></img>
                </NavLink>
                {u.followed
                    ? <button onClick={() => props.Unfollow(u.id)}>Unfollow</button>
                    : <button onClick={() => props.Follow(u.id)}>Follow</button>}

            </div>
            <div className={classes.description}>
                <div className={classes.nameStatus}>
                    <div className={classes.fullName}>{u.name}</div>
                    <div className={classes.status}>{u.status}</div>
                </div>
                <div className={classes.location}>
                    <div className={classes.city}>{"u.location.city"}</div>
                    <div className={classes.country}>{"u.location.country"}</div>
                </div>
            </div>
        </div>
        )
        }
    </div>
}

export default Users