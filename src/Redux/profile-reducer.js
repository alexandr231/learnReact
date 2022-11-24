const updateChangedTextType = 'UPDATE-CHANGED-TEXT';
const addPostType = 'ADD-POST';
const setUserProfileType = 'SET-USER-PROFILE'

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
    ],
    profile: null,
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
        case setUserProfileType:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state;
    }
}

export let AddPost = () => ({ type: addPostType });
export let UpdateChangedText = (text) => ({ type: updateChangedTextType, newText: text });
export let SetUserProfile = (profile) => ({type: setUserProfileType, profile})

export default profileReducer;