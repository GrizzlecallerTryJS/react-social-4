import React from "react";
import Posts from "./Posts/Posts";
import defaultProfileAvatar from "../../../default/images/defaultProfileAvatar.png";
import { connect } from "react-redux";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { withRouter } from "react-router-dom/cjs/react-router-dom";
import { Redirect } from "react-router-dom";
import { getProfileTC } from "../../../redux/profileFunc/profileThunkCreators";

let mapStateToProps = (state) => {
  return {
    userProfile: state.profilePage.profileData,
    defaultId: state.profilePage.defaultId,
    userId: state.profilePage.userId,
    defaultProfileAvatar,
    isAuth: state.authState.isAuth,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    setUserProfile: (userProfile) => {
      dispatch(getProfileTC(userProfile));
    },
  };
};

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.defaultId;
    }
    this.props.setUserProfile(userId);
  }
  render() {
    if (!this.props.isAuth) {
      return <Redirect to={"/login"} />;
    }
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
