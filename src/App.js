import './App.css';
import Header from './Components/Header/Header';
import Profile from './Components/ContentBar/Profile/Profile';
import Dialogs from './Components/ContentBar/Dialogs/Dialogs';
import { Route, Routes } from 'react-router-dom';
import News from './Components/ContentBar/News/News';
import Music from './Components/ContentBar/Music/Music';
import Settings from './Components/ContentBar/Settings/Settings';
import Sidebar from './Components/Sidebar/Sidebar';


function App(props) {
    return (
            <div className='wrapper'>
                <Header />
                <div className='second-row'>
                    <Sidebar />
                    <div className='wrapper-content'>
                        <Routes>
                            <Route path='/dialogs/*' element={<Dialogs state = {props.state.messagesPage} dispatch={props.dispatch}/>} />
                            <Route path='/profile' element={<Profile state = {props.state.profilePage} dispatch={props.dispatch}/>} />
                            <Route path='/news' element={<News />} />
                            <Route path='/music' element={<Music />} />
                            <Route path='/settings' element={<Settings />} />
                        </Routes>
                    </div>
                </div>
            </div>
    );

}

export default App;
