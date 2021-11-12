import React from "react";
import UserItemList from "./UserItemList";
import axios from "axios";

class UsersClass extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersOnPageCount}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalCount(response.data.totalCount);
      });
  }

  getUsers = (item) => {
    this.props.setCurrentPage(item);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users/?page=${item}&count=${this.props.usersOnPageCount}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    return <UserItemList {...this.props} getUsers={this.getUsers} />;
  }
}

export default UsersClass;
