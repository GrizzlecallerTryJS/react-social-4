import React from "react";
import styles from "./Header.module.css";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { getAuthTC, logoutTC } from "../../redux/authFunc/authThunkCreators";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {
    userData: state.authState.userData,
    isAuth: state.authState.isAuth,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    getAuth: () => {
      dispatch(getAuthTC());
    },
    logout: () => {
      dispatch(logoutTC());
    },
  };
};

class HeaderContainer extends React.Component {
  componentDidMount() {
    if (!this.props.isAuth) {
      this.props.getAuth();
    }
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
              <button onClick={this.props.logout}>logout</button>
            </NavLink>
          ) : (
            <NavLink to={`/login`}>Login</NavLink>
          )}
        </div>
      </div>
    );
  }
}

export default compose(connect(mapStateToProps, mapDispatchToProps))(
  HeaderContainer
);
