import axios from 'axios'
import React, { Component } from 'react'
import Profile from './Profile'
import { connect } from 'react-redux';
import { SetUserProfile } from '../../../Redux/profile-reducer';
import { useParams } from 'react-router-dom';

export function withRouter(Children){
    return(props)=>{

       const match  = {params: useParams()};
       return <Children {...props}  match = {match}/>
   }
 }


class ProfileContainer extends Component {
    componentDidMount() {
        debugger;
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then( response => {
            this.props.SetUserProfile(response.data);
        })
    }

    render() {
        return (
            <Profile {...this.props} />
        )
    }
}

let withUrlDataContainer = withRouter(ProfileContainer)
let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    }
}

export default connect(mapStateToProps, {
    SetUserProfile,
})(withUrlDataContainer);

