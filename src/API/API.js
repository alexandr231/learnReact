import axios from "axios";

let instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY" : "1cc0a49a-b9dd-4068-acfd-12ab0249400b"
    },
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
});

export const UsersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
    }
}

export const FollowApi = {
    unfollow(userID) {
        return instance.delete(`follow/${userID}`).then(response => response.data);
    },
    follow(userID) {
        return instance.post(`follow/${userID}`).then(response => response.data);
    }
}