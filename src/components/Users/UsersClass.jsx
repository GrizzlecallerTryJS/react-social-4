import React from "react";
import UserItemList from "./UserItemList";
import Preloader from "../StandartComponent/Preloader/Preloader";
import { UserAPI } from "../../api/api";

class UsersClass extends React.Component {
  componentDidMount() {
    if (this.props.users.length === 0) {
      this.props.setIsFetching(true);
      UserAPI.getUsers(
        this.props.usersOnPageCount,
        this.props.defaultPage
      ).then((data) => {
        this.props.setUsers(data.items);
        this.props.setTotalCount(data.totalCount);
        this.props.setIsFetching(false);
      });
    }
  }

  getUsers = (item) => {
    this.props.setIsFetching(true);
    this.props.setCurrentPage(item);
    UserAPI.getUsers(this.props.usersOnPageCount, item).then((data) => {
      this.props.setUsers(data.items);
      this.props.setIsFetching(false);
    });
  };

  getUserById = (userId) => {
    UserAPI.getUserById(userId).then((data) => {
      this.props.setUserProfile(data);
    });
  };

  setFollowUserStatus = (userId, followed) => {
    this.props.setFollowIsFetching();
    if (followed) {
      UserAPI.unfollowUser(userId).then((data) => {
        if (data.resultCode === 0) {
          this.props.followAction(userId);
          this.props.setFollowIsFetching();
        }
      });
    } else {
      UserAPI.followUser(userId).then((data) => {
        if (data.resultCode === 0) {
          this.props.followAction(userId);
          this.props.setFollowIsFetching();
        }
      });
    }
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
          setFollowUserStatus={this.setFollowUserStatus}
        />
      );
    }
  }
}

export default UsersClass;
