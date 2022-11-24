const FollowType = 'FOLLOW';
const UnfollowType = 'UNFOLLOW';
const SetUsersType = "SET-USERS";
const SetCurrentPageType = 'SET-CURRENT-PAGE';
const SetTotalCountType = 'SET-TOTAL-COUNT';
const SetPageSizeType = 'SET-PAGE-SIZE';
const ToggleIsFetchingType = 'TOGGLE-IS-FETCHING';

let initialState = {
    users: [
    ],
    currentPage: 1,
    pageSize: 4,
    totalCount: 20,
    isFetching: false,
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
        case ToggleIsFetchingType:
            return {
                ...state,
                isFetching: action.isFetching,
            }
        default:
            return state;
    }
}

export let Follow = (userId) => ({ type: FollowType, userId });
export let Unfollow = (userId) => ({ type: UnfollowType, userId });
export let SetUsers = (users) => ({ type: SetUsersType, users });
export let SetCurrentPage = (page) => ({ type: SetCurrentPageType, page });
export let SetTotalCount = (totalCount) => ({ type: SetTotalCountType, totalCount });
export let SetPageSize = (pageSize) => ({ type: SetPageSizeType, pageSize });
export let ToggleIsFetching = (isFetching) => ({ type: ToggleIsFetchingType, isFetching });

export default usersReducer;