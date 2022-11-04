import React from 'react';
import { actionCreatorAddPost, actionCreatorUpdateChangedText } from '../../../../Redux/profile-reducer';
import StoreContext from '../../../../StoreContext';
import MainContent from './MainContent';

function MainContentContainer(props) {

    

    return (
        <StoreContext> 
            { (store) => {

                let posts = store.getState().profilePage.postData;
                let textValue = store.getState().profilePage.textValue;
            
                let addPost = () => {
                    store.dispatch(actionCreatorAddPost());
                }
                let UpdateChangedText = (text) => {
                    store.dispatch(actionCreatorUpdateChangedText(text));
                }

                return (<MainContent posts = {posts} addPost={addPost} 
                    UpdateChangedText = {UpdateChangedText} textValue = {textValue}></MainContent>)
            }

            }
        </StoreContext>
    );
}

export default MainContentContainer;