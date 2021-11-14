import React from "react";
import Posts from "./Posts/Posts";
import defaultProfileAvatar from "../../../default/images/defaultProfileAvatar.png";
import { setUserProfileAC } from "../../../redux/profileReducer";
import { connect } from "react-redux";
import axios from "axios";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

let mapStateToProps = (store) => {
  return {
    userProfile: store.profilePage.profileData,
    defaultId: store.profilePage.defaultId,
    defaultProfileAvatar,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    setUserProfile: (userProfile) => {
      dispatch(setUserProfileAC(userProfile));
    },
  };
};

class ProfileContainer extends React.Component {
  componentDidMount() {
    if (this.props.userId) {
      axios
        .get(
          `https://social-network.samuraijs.com/api/1.0/profile/${this.props.userId}`
        )
        .then((response) => {
          debugger;
          this.props.setUserProfile(response.data);
        });
    } else {
      axios
        .get(
          `https://social-network.samuraijs.com/api/1.0/profile/${this.props.defaultId}`
        )
        .then((response) => {
          debugger;
          this.props.setUserProfile(response.data);
        });
    }
  }
  render() {
    return (
      <div>
        <div>Profile</div>
        <ProfileInfo {...this.props} />
        <Posts />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
