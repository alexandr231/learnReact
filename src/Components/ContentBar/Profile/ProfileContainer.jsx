
import { Component } from 'react';
import Profile from './Profile'
import { connect } from 'react-redux';
import { getProfile, SetUserProfile, getStatus, updateStatus } from '../../../Redux/profile-reducer';
import { useParams } from 'react-router-dom';
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
        if (!userId && this.props.isAuth) {
            userId = this.props.authUserId;
            if (!userId) {
                this.props.history.push("/login");
            }
        }
        this.props.getProfile(userId);
        this.props.getStatus(userId);
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
        status: state.profilePage.status,
        isAuth: state.auth.isAuth,
        authUserId: state.auth.userId,
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, {
        SetUserProfile,
        getProfile,
        getStatus,
        updateStatus
    }),
)(ProfileContainer);
