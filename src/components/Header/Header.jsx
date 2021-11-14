import React from "react";
import styles from "./Header.module.css";
import axios from "axios";
import { setAuthAC } from "../../redux/authReducer";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

let mapStateToProps = (state) => {
  return {
    userData: state.authState.userData,
    isAuth: state.authState.isAuth,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    setUserAuth: (userAuth) => {
      dispatch(setAuthAC(userAuth));
    },
  };
};

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.resultCode === 0) {
          this.props.setUserAuth(response.data.data);
        }
      });
  }

  render() {
    return (
      <div className={styles.header}>
        <div>Header</div>
        <div>
          <img
            src="https://e7.pngegg.com/pngimages/398/8/png-clipart-butterfly-logo-logo-design-fashion-butterfly-flag-fashion-girl-thumbnail.png"
            alt="logo"
          />
        </div>
        <div className={styles.logonBlock}>
          {this.props.isAuth ? (
            <NavLink to={`/Profile/${this.props.userData.id}`}>
              {this.props.userData.login}
            </NavLink>
          ) : (
            <NavLink to={`/login`}>Login</NavLink>
          )}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
