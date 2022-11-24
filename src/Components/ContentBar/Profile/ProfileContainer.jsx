import axios from 'axios'
import React, { Component } from 'react'
import Profile from './Profile'
import { connect } from 'react-redux';
import { SetUserProfile } from '../../../Redux/profile-reducer';


class ProfileContainer extends Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then( response => {
            this.props.SetUserProfile(response.data);
        })
    }

    render() {
        return (
            <Profile {...this.props} />
        )
    }
}


let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    }
}

export default connect(mapStateToProps, {
    SetUserProfile,
})(ProfileContainer);

