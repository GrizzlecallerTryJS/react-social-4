import React from "react";
import Posts from "./Posts/Posts";
import defaultProfileAvatar from "../../../default/images/defaultProfileAvatar.png";
import { connect } from "react-redux";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { withRouter } from "react-router-dom/cjs/react-router-dom";
import {
  getProfileTC,
  getUserStatusTC,
  setUserStatusTC,
} from "../../../redux/Func/profileFunc/profileThunkCreators";
import { withAuthRedirect } from "../../StandartComponent/hoc/withAuthRedirect";
import { compose } from "redux";
import {
  defaultIdSelector,
  profileStatusSelector,
  userIdSelector,
  userProfileSelector,
} from "../../../redux/Selector/ProfileSelectors";

let mapStateToProps = (state) => {
  return {
    userProfile: userProfileSelector(state),
    defaultId: defaultIdSelector(state),
    userId: userIdSelector(state),
    profileStatus: profileStatusSelector(state),
    defaultProfileAvatar,
    //isAuth: userDataSelector(state),
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    setUserProfile: (userProfile) => {
      dispatch(getProfileTC(userProfile));
    },
    getUserStatus: (userId) => {
      dispatch(getUserStatusTC(userId));
    },
    setUserStatus: (userId, newStatus) => {
      dispatch(setUserStatusTC(userId, newStatus));
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
    this.props.getUserStatus(userId);
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
