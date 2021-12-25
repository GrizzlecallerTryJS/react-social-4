import React from "react";
import LoginForm from "../../../forms/LoginForm";
import { Redirect } from "react-router-dom";

let LoginPart = (props) => {
  if (props.isAuth.isAuth) {
    return <Redirect to={"/profile"} />;
    //return <LoginForm {...props} />;
  } else {
    return (
      <div>
        <LoginForm {...props} />
      </div>
    );
  }
};

export default LoginPart;
