const updateChangedTextType = 'UPDATE-CHANGED-TEXT';
const addPostType = 'ADD-POST';

let initialState = {
    textValue: '',
    postData: [
        { id: 1, message: 'No epic fail today, my friends, tis brilliantly clear that this one is in the bag.' },
        { id: 2, message: 'Now, where did I put my snakeskin bag? Because this one, my friends, is in it!' },
        { id: 3, message: 'Oh yeah, its in the bag!' },
        { id: 4, message: 'This one is in the bag, and I dont mean the saddlebag. Who said anything about saddlebags?' },
        { id: 5, message: 'Lost' },
        { id: 6, message: "win" },
        { id: 7, message: "pasha " }
    ]
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case addPostType:
            return {
                ...state,
                postData: [...state.postData,{id: 8, message: state.textValue}],
                textValue: '',
            };

        case updateChangedTextType:
            return {
                ...state,
                textValue: action.newText,
            };

        default:
            return state;
    }
}

export let actionCreatorAddPost = () => ({ type: addPostType });
export let actionCreatorUpdateChangedText = (text) => ({ type: updateChangedTextType, newText: text });

export default profileReducer;