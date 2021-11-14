import React from "react";
import Posts from "./Posts/Posts";
import defaultProfileAvatar from "../../../default/images/defaultProfileAvatar.png";
import { setUserProfileAC } from "../../../redux/profileReducer";
import { connect } from "react-redux";
import axios from "axios";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { withRouter } from "react-router-dom/cjs/react-router-dom";

let mapStateToProps = (store) => {
  return {
    userProfile: store.profilePage.profileData,
    defaultId: store.profilePage.defaultId,
    userId: store.profilePage.userId,
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
    debugger;

    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.defaultId;
    }
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ProfileContainer));
