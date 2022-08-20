import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/ContentBar/Profile/Profile';
import Dialogs from './Components/ContentBar/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import News from './Components/ContentBar/News/News';
import Music from './Components/ContentBar/Music/Music';
import Settings from './Components/ContentBar/Settings/Settings';


function App(props) {
    return (
        <BrowserRouter>
            <div className='wrapper'>
                <Header />
                <div className='second-row'>
                    <Navbar />
                    <div className='wrapper-content'>
                        <Routes>
                            <Route path='/dialogs/*' element={<Dialogs state = {props.state.messagesPage}/>} />
                            <Route path='/profile' element={<Profile state = {props.state.profilePage} />} />
                            <Route path='/news' element={<News />} />
                            <Route path='/music' element={<Music />} />
                            <Route path='/settings' element={<Settings />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter >
    );

}

export default App;
