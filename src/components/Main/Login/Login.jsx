import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import LoginPart from "./LoginPart";
import { loginTC } from "../../../redux/Func/authFunc/authThunkCreators";

const Login = () => {
  let mapStateToProps = (state) => {
    return {
      isAuth: state.authState,
    };
  };

  let mapDispatchToProps = (dispatch) => {
    return {
      getLogin: (email, password) => {
        dispatch(loginTC(email, password));
      },
    };
  };

  const LoginContainer = compose(
    connect(mapStateToProps, mapDispatchToProps)(LoginPart)
  );

  return <LoginContainer />;
};

export default Login;
