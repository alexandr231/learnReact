const FollowType = 'FOLLOW';
const UnfollowType = 'UNFOLLOW';
const SetUsersType = "SET-USERS";

let initialState = {
    users: [
    ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FollowType:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            followed: true
                        };
                    }
                    return u;
                })
            };
        case UnfollowType:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            followed: false
                        };
                    }
                    return u;
                })
            };
        case SetUsersType:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state;
    }
}

export let followAC = (userId) => ({ type: FollowType, userId });
export let unfollowAC = (userId) => ({ type: UnfollowType, userId });
export let setUsersAC = (users) => ({ type: SetUsersType, users });

export default usersReducer;