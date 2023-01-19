import { auth } from "./auth-reducer";

const InitializedSuccess = "INITIAlAZIED-SUCCESS";

let initialState = {
    initialized: false,
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case InitializedSuccess:
            return {
                ...state,
                initialized:true,
            };
        default:
            return state;
    }
}

export let SetInitialized = () => ({ type: InitializedSuccess});

export const Initialize = () => {

    return (dispatch) => {
        let promise = dispatch(auth());
        Promise.all([promise]).then( () => {
            dispatch(SetInitialized());
        })
    }
}

export default appReducer;