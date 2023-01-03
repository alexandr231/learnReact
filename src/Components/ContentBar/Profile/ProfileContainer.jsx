import axios from 'axios'
import React, { Component } from 'react'
import Profile from './Profile'
import { connect } from 'react-redux';
import { getProfile, SetUserProfile } from '../../../Redux/profile-reducer';
import { Navigate, useParams } from 'react-router-dom';

export function withRouter(Children){
    return(props)=>{

       const match  = {params: useParams()};
       return <Children {...props}  match = {match}/>
   }
 }


class ProfileContainer extends Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getProfile(userId);
    }

    render() {
        if (!this.props.isAuth) {return <Navigate to="/login"/>}
        return (
            <Profile {...this.props} />
        )
    }
}

let withUrlDataContainer = withRouter(ProfileContainer)
let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {
    SetUserProfile,
    getProfile
})(withUrlDataContainer);

