import { ProfileAPI } from "../API/API";

const updateChangedTextType = 'UPDATE-CHANGED-TEXT';
const addPostType = 'ADD-POST';
const setUserProfileType = 'SET-USER-PROFILE'
const setUserStatusType = 'SET-USER-STATUS'

let initialState = {
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
    status: "",
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case addPostType:
            return {
                ...state,
                postData: [...state.postData,{id: 8, message: action.textValue}],
            };
        case setUserProfileType:
            return {
                ...state,
                profile: action.profile
            }
        case setUserStatusType:
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }
}

export const AddPost = (textValue) => ({ type: addPostType, textValue });
export const SetUserProfile = (profile) => ({type: setUserProfileType, profile})
export const SetUserStatus = (status) => ({type: setUserStatusType, status})

export const getProfile = (userID) => {
    return (dispatch) => {
        ProfileAPI.getProfile(userID).then( response => {
            dispatch(SetUserProfile(response));
        });
    }
}

export const getStatus = (userID) => {
    return (dispatch) => {
        ProfileAPI.getStatus(userID).then(response => {
            dispatch(SetUserStatus(response));
        });
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        ProfileAPI.setStatus(status).then(response => {
            if (response.resultCode === 0) {
                dispatch(SetUserStatus(status));
            }
        });
    }
}
export default profileReducer;