import React from "react";
import UserItemList from "./UserItemList";
import axios from "axios";

class UsersClass extends React.Component {
  componentDidMount() {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalCount(response.data.totalCount);
      });
  }

  render() {
    return <UserItemList {...this.props} />;
  }
}

export default UsersClass;
