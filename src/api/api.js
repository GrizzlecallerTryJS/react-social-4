import axios from "axios";

const instance = axios.create({
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  withCredentials: true,
  headers: { "API-KEY": "ff303e2a-33e9-4b2c-90a3-a8b22ff8b29b" },
});

export const UserAPI = {
  getAllUsers(usersOnPageCount) {
    return instance
      .get(`users?count=${usersOnPageCount}`)
      .then((response) => response.data);
  },
  getUsers(item, usersOnPageCount) {
    return instance
      .get(`users?page=${item}&count=${usersOnPageCount}`)
      .then((response) => response.data);
  },
  getUserById(userId) {
    return instance.get(`profile/${userId}`).then((response) => response.data);
  },
};
