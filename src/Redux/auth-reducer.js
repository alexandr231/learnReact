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

export let SetAuthUserData = (login, email, userId, isAuth) => ({ type: SetAuthUserDataType, data: { login, email, userId, isAuth } });
export let ToggleIsFetching = (isFetching) => ({ type: TogleIsFetchingType, isFetching });

export const auth = () => {

    return (dispatch) => {
        dispatch(ToggleIsFetching(true));
        AuthAPI.auth().then(response => {
            if (response.resultCode === 0) {
                let { email, id, login } = response.data;
                dispatch(SetAuthUserData(login, email, id, true));
            }
            dispatch(ToggleIsFetching(false));
        });
    }
}

export const login = (login, password, rememberMe) => {

    return (dispatch) => {
        AuthAPI.login(login, password, rememberMe).then(response => {
            if (response.resultCode === 0) {
                dispatch(auth());
            }
        })
    }
}

export const logout = () => {

    return (dispatch) => {
        AuthAPI.logout().then(response => {
            if (response.resultCode === 0) {
                dispatch(SetAuthUserData(null, null, null, false));
            }
        })
    }
}

export default authReducer;