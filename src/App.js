import './App.css';
import DialogsContainer from './Components/ContentBar/Dialogs/DialogsContainer';
import { Route, Routes } from 'react-router-dom';
import News from './Components/ContentBar/News/News';
import Music from './Components/ContentBar/Music/Music';
import Settings from './Components/ContentBar/Settings/Settings';
import Sidebar from './Components/Sidebar/Sidebar';
import UsersContainer from './Components/ContentBar/Users/UsersContainer';
import ProfileContainer from './Components/ContentBar/Profile/ProfileContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import Login from './Components/Login/Login';
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Initialize } from './Redux/app-reducer';
import Preloader from './Components/common/Preloader/Preloader';
import { compose } from 'redux';


class App extends Component {
    componentDidMount() {
        this.props.Initialize();
    }

    render() {
        if (!this.props.initialized) return <Preloader />;
        return (
            <div className='wrapper'>
                <HeaderContainer />
                <div className='second-row'>
                    <Sidebar />
                    <div className='wrapper-content'>
                        <Routes>
                            <Route path='/dialogs/*' element={<DialogsContainer />} />
                            <Route path='/profile/:userId' element={<ProfileContainer />} />
                            <Route path='/profile' element={<ProfileContainer />} />
                            <Route path='/news' element={<News />} />
                            <Route path='/music' element={<Music />} />
                            <Route path='/settings' element={<Settings />} />
                            <Route path='/users' element={<UsersContainer />} />
                            <Route path='/login' element={<Login />} />
                        </Routes>
                    </div>
                </div>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized,
    }
}

export default compose(
    connect(mapStateToProps, {
        Initialize,
    }),
    
)(App);
