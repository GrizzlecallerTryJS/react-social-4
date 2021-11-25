import React from "react";
import Posts from "./Posts/Posts";
import defaultProfileAvatar from "../../../default/images/defaultProfileAvatar.png";
import { connect } from "react-redux";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { withRouter } from "react-router-dom/cjs/react-router-dom";
import { getProfileTC } from "../../../redux/profileFunc/profileThunkCreators";
import { withAuthRedirect } from "../../StandartComponent/hoc/withAuthRedirect";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {
    userProfile: state.profilePage.profileData,
    defaultId: state.profilePage.defaultId,
    userId: state.profilePage.userId,
    defaultProfileAvatar,
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
    return (
      <div>
        <div>Profile</div>
        <ProfileInfo {...this.props} />
        <Posts />
      </div>
    );
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
