const FollowType = 'FOLLOW';
const UnfollowType = 'UNFOLLOW';
const SetUsersType = "SET-USERS";
const SetCurrentPageType = 'SET-CURRENT-PAGE';
const SetTotalCountType = 'SET-TOTAL-COUNT';
const SetPageSizeType = 'SET-PAGE-SIZE';

let initialState = {
    users: [
    ],
    currentPage: 1,
    pageSize:4,
    totalCount:20
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
                users: action.users
            };
        case SetCurrentPageType:
            return {
                ...state,
                currentPage: action.page
            };
        case SetTotalCountType:
            return {
                ...state,
                totalCount: action.totalCount
            };
        case SetPageSizeType:
            return {
                ...state,
                pageSize: action.pageSize
            }
        default:
            return state;
    }
}

export let followAC = (userId) => ({ type: FollowType, userId });
export let unfollowAC = (userId) => ({ type: UnfollowType, userId });
export let setUsersAC = (users) => ({ type: SetUsersType, users });
export let setCurrentPageAC = (page) => ({ type: SetCurrentPageType, page });
export let setTotalCountAC = (totalCount) => ({ type: SetTotalCountType, totalCount });
export let setPageSizeAC = (pageSize) => ({ type: SetPageSizeType, pageSize });

export default usersReducer;