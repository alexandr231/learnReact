
import React, { Component } from 'react'
import Profile from './Profile'
import { connect } from 'react-redux';
import { getProfile, SetUserProfile } from '../../../Redux/profile-reducer';
import { useParams } from 'react-router-dom';
import { withAuthRedirect } from '../../../HOC/withAuthRedirect';
import { compose } from 'redux';

export function withRouter(Children) {
    return (props) => {

        const match = { params: useParams() };
        return <Children {...props} match={match} />
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

export default compose(
    withRouter,
    connect(mapStateToProps, {
        SetUserProfile,
        getProfile
    }),
    withAuthRedirect
)(ProfileContainer);
