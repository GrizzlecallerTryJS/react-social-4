import React from "react";
import UserItemList from "./UserItemList";

class UsersClass extends React.Component {
  render() {
    return <UserItemList {...this.props} />;
  }
}

export default UsersClass;
