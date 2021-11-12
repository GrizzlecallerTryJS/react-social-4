import React from "react";
import UserItemList from "./UserItemList";
import axios from "axios";
import Preloader from "../StandartComponent/Preloader/Preloader";

class UsersClass extends React.Component {
  componentDidMount() {
    this.props.setIsFetchingAC(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersOnPageCount}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalCount(response.data.totalCount);
        this.props.setIsFetchingAC(false);
      });
  }

  getUsers = (item) => {
    this.props.setIsFetchingAC(true);
    this.props.setCurrentPage(item);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users/?page=${item}&count=${this.props.usersOnPageCount}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setIsFetchingAC(false);
      });
  };

  render() {
    if (this.props.isFetching) {
      return <Preloader />;
    } else {
      return <UserItemList {...this.props} getUsers={this.getUsers} />;
    }
  }
}

export default UsersClass;
