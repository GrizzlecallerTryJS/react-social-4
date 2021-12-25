import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import LoginPart from "./LoginPart";

const Login = () => {
  let mapStateToProps = (state) => {
    return {
      isAuth: state.authState,
    };
  };

  let mapDispatchToProps = (dispatch) => {};

  const LoginContainer = compose(
    connect(mapStateToProps, mapDispatchToProps)(LoginPart)
  );

  return <LoginContainer />;
};

export default Login;
