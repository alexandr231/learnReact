import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import {connect} from 'react-redux';

export const withAuthRedirect = (Comp) => {

    class RedirectComponent extends Component {
        render() {
            if (!this.props.isAuth) { return <Navigate to="/login" /> }
            return <Comp {...this.props}/>
        }
    }

    let mapStateToProps = (state) => {
        return {
            isAuth: state.auth.isAuth
        }
    }

    return connect(mapStateToProps)(RedirectComponent);

}