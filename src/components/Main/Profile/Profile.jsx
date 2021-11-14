import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Posts from "./Posts/Posts";
import { connect } from "react-redux";
import defaultProfileAvatar from "../../../default/images/defaultProfileAvatar.png";
import axios from "axios";
import { setUserProfileAC } from "../../../redux/profileReducer";

let mapStateToProps = (store) => {
  return {
    userProfile: store.profilePage.profileData,
    defaultId: store.defaultId,
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
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/profile/${this.props.defaultId}`
      )
      .then((response) => {
        this.props.setUserProfile(response.data);
      });
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

const Profile = connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);

export default Profile;
