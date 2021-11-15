import React from "react";
import UserItemList from "./UserItemList";
import Preloader from "../StandartComponent/Preloader/Preloader";
import { UserAPI } from "../../api/api";

class UsersClass extends React.Component {
  componentDidMount() {
    if (this.props.users.length === 0) {
      this.props.setIsFetching(true);
      UserAPI.getAllUsers(this.props.usersOnPageCount).then((data) => {
        this.props.setUsers(data.items);
        this.props.setTotalCount(data.totalCount);
        this.props.setIsFetching(false);
      });
    }
  }

  getUsers = (item) => {
    this.props.setIsFetching(true);
    this.props.setCurrentPage(item);
    UserAPI.getUsers(item, this.props.usersOnPageCount).then((data) => {
      this.props.setUsers(data.items);
      this.props.setIsFetching(false);
    });
  };

  getUserById = (userId) => {
    UserAPI.getUserById(userId).then((data) => {
      this.props.setUserProfile(data);
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
          setUserFollowingState={this.setUserFollowingState}
        />
      );
    }
  }
}

export default UsersClass;
