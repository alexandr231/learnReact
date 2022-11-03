const updateChangedTextType = 'UPDATE-CHANGED-TEXT';
const addPostType = 'ADD-POST';

const profileReducer = (state, action) => {
    switch (action.type) {
        case addPostType:
            let newPost = {

                id: 8,
                message: state.textValue

            }

            state.postData.push(newPost);
            state.textValue = '';

            return state;

        case updateChangedTextType:
            state.textValue = action.newText

            return state;

        default:
            return state;
    }
}

export let actionCreatorAddPost = () => ({type:addPostType});
export let actionCreatorUpdateChangedText = (text) => ({type:updateChangedTextType, newText: text});

export default profileReducer;