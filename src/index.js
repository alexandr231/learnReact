import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './Redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = () => {
    root.render(
        <React.StrictMode>
            <App state={store.getState()} addPost={store.addPost.bind(store)} updateChangedText = {store.updateChangedText.bind(store)} />
        </React.StrictMode>
    );
}
rerenderEntireTree();

store.subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
