import axios from "axios";

const instance = axios.create({
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  withCredentials: true,
  headers: { "API-KEY": "ff303e2a-33e9-4b2c-90a3-a8b22ff8b29b" },
});

export const UserAPI = {
  getUsers(usersOnPageCount, page) {
    return instance
      .get(`users?page=${page}&count=${usersOnPageCount}`)
      .then((response) => response.data);
  },
  getUserById(userId) {
    return instance.get(`profile/${userId}`).then((response) => response.data);
  },
  followUser(userId) {
    return instance.post(`follow/${userId}`).then((response) => response.data);
  },
  unfollowUser(userId) {
    return instance
      .delete(`follow/${userId}`)
      .then((response) => response.data);
  },
};

export const ProfileAPI = {
  getStatus(userId) {
    return instance
      .get(`profile/status/${userId}`)
      .then((response) => response.data);
  },
  setStatus(newStatus) {
    return instance
      .put(`/profile/status`, { status: newStatus })
      .then((response) => response.data);
  },
};

export const AuthAPI = {
  getAuth() {
    return instance.get(`auth/me`).then((response) => response.data);
  },
};
