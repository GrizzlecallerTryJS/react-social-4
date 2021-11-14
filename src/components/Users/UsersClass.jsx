import React from "react";
import UserItemList from "./UserItemList";
import axios from "axios";
import Preloader from "../StandartComponent/Preloader/Preloader";

class UsersClass extends React.Component {
  componentDidMount() {
    this.props.setIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersOnPageCount}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalCount(response.data.totalCount);
        this.props.setIsFetching(false);
      });
  }

  getUsers = (item) => {
    this.props.setIsFetching(true);
    this.props.setCurrentPage(item);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users/?page=${item}&count=${this.props.usersOnPageCount}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setIsFetching(false);
      });
  };

  getUserById = (id) => {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`)
      .then((response) => {
        this.props.setUserProfile(response.data);
      });
  };

  render() {
    if (this.props.isFetching) {
      return <Preloader />;
    } else {
      return (
        <UserItemList
          {...this.props}
          getUsers={this.getUsers}
          getUserById={this.getUserById}
        />
      );
    }
  }
}

export default UsersClass;
