import './App.css';
import Header from './Components/Header/Header';
import Profile from './Components/ContentBar/Profile/Profile';
import DialogsContainer from './Components/ContentBar/Dialogs/DialogsContainer';
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
                            <Route path='/dialogs/*' element={<DialogsContainer store={props.store}/>} />
                            <Route path='/profile' element={<Profile store={props.store}/>} />
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
