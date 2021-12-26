import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import LoginPart from "./LoginPart";
import { loginTC } from "../../../redux/Func/authFunc/authThunkCreators";
import { isAuthSelector } from "../../../redux/Selector/AuthSelectors";

const Login = () => {
  let mapStateToProps = (state) => {
    return {
      isAuth: isAuthSelector(state),
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
