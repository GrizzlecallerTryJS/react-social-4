import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { isAuthSelector } from "../../../redux/Selector/AuthSelectors";

let mapStateToPropsForAuth = (state) => {
  return {
    isAuth: isAuthSelector(state),
  };
};

export const withAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      if (!this.props.isAuth) {
        return <Redirect to={"/login"} />;
      }
      return <Component {...this.props} />;
    }
  }
  return connect(mapStateToPropsForAuth)(RedirectComponent);
};
