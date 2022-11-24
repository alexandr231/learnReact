import axios from 'axios';
import classes from './Users.module.css';

import React, { Component } from 'react'

class Users extends Component {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.SetUsers(response.data.items);
        });
    }

    render() {
        return <div className={classes.Users}>
            {this.props.users.map(u => <div key={u.id} className={classes.avaFollow}>
                <div>
                    <img src={u.photos.small != null
                        ? u.photos.small
                        : "https://avatars.mds.yandex.net/i?id=8612e9d6865f27632476a0c7e39237f0def4f025-5869170-images-thumbs&n=13&exp=1"}
                        className={classes.ava}></img>
                    {u.followed
                        ? <button onClick={() => this.props.Unfollow(u.id)}>Unfollow</button>
                        : <button onClick={() => this.props.Follow(u.id)}>Follow</button>}
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
}

export default Users;