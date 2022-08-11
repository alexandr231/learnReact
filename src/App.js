import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';


function App() {
    return (
        <div className='wrapper'>
            <Header/>
            <div className='second-row'>
                <Navbar/>
                <Profile/>
            </div>
        </div>
    );

}

export default App;
