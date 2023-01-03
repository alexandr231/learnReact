import { AuthAPI } from "../API/API";

const SetAuthUserDataType = "SET-USER-DATA";
const TogleIsFetchingType = "TOGGLE-IS-FETCHING";

let initialState = {
    userId: null,
    login: null,
    email: null,
    isFetching: false,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SetAuthUserDataType:
            return {
                ...state,
                ...action.data,
                isAuth: true
            };
        case TogleIsFetchingType:
            return {
                ...state,
                isFetching: action.isFetching,
            }
        default:
            return state;
    }
}

export let SetAuthUserData = (login, email, userId) => ({ type: SetAuthUserDataType, data: { login, email, userId } });
export let ToggleIsFetching = (isFetching) => ({ type: TogleIsFetchingType, isFetching });

export const auth = (userID) => {

    return (dispatch) => {
        dispatch(ToggleIsFetching(true));
        AuthAPI.auth().then(response => {
            if (response.resultCode === 0) {
                let { email, id, login } = response.data;
                dispatch(SetAuthUserData(login, email, id));
            }
            dispatch(ToggleIsFetching(false));
        });
    }
}

export default authReducer;