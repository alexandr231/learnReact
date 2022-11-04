import React from 'react';
import { actionCreatorAddPost, actionCreatorUpdateChangedText } from '../../../../Redux/profile-reducer';
import MainContent from './MainContent';

function MainContentContainer(props) {

    let posts = props.store.getState().profilePage.postData;
    let textValue = props.store.getState().profilePage.textValue;

    let addPost = () => {
        props.store.dispatch(actionCreatorAddPost());
    }
    let UpdateChangedText = (text) => {
        props.store.dispatch(actionCreatorUpdateChangedText(text));
    }

    return (
        <MainContent posts = {posts} addPost={addPost} UpdateChangedText = {UpdateChangedText} textValue = {textValue}></MainContent>
    );
}

export default MainContentContainer;