import axios from "axios";

const getUsers = (setUsers) => {
  axios
    .get("https://social-network.samuraijs.com/api/1.0/users")
    .then((response) => {
      setUsers(response.data.items);
    });
};

export default getUsers;
