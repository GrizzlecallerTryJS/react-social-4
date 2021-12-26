import React from "react";
import LoginForm from "../../../forms/LoginForm";
import { Redirect } from "react-router-dom";

let LoginPart = (props) => {
  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  } else {
    return (
      <div>
        <LoginForm {...props} />
      </div>
    );
  }
};

export default LoginPart;
