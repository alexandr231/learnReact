import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
<<<<<<< HEAD
import state, { subscribe } from './Redux/state'
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { addPost, updateChangedText } from './Redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} updateChangedText = {updateChangedText} />
        </React.StrictMode>
    );
}

rerenderEntireTree(state);
=======
import { addPost, updateChangedText, state, subscribe } from './Redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = () => {
    root.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} updateChangedText = {updateChangedText} />
        </React.StrictMode>
    );
}
rerenderEntireTree();

>>>>>>> c301e4c61525a578ccb665082b336c588bb4b1de
subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
