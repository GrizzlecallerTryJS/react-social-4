import React from "react";
import UserItemList from "./UserItemList";
import Preloader from "../../StandartComponent/Preloader/Preloader";
import { Redirect } from "react-router-dom";

class UsersClass extends React.Component {
  componentDidMount() {
    if (this.props.users.length === 0) {
      this.props.getUsers(this.props.usersOnPageCount, this.props.defaultPage);
    }
  }

  getUsers = (pageNumber) => {
    this.props.getUsers(this.props.usersOnPageCount, pageNumber);
  };

  getUserById = (userId) => {
    this.props.getUserById(userId);
  };

  setFollowUserStatus = (userId, followed) => {
    this.props.setFollowUserStatus(userId, followed);
  };

  render() {
    if (!this.props.isAuth) {
      return <Redirect to={"/login"} />;
    }
    if (this.props.isFetching) {
      return <Preloader />;
    } else {
      return (
        <UserItemList
          {...this.props}
          getUsers={this.getUsers}
          getUserById={this.getUserById}
          setFollowUserStatus={this.setFollowUserStatus}
        />
      );
    }
  }
}

export default UsersClass;
