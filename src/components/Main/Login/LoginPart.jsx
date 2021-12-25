import React from "react";
import LoginForm from "../../../forms/LoginForm";

let LoginPart = (props) => {
  debugger;

  if (props.isAuth.isAuth) {
    //return <Redirect to={"/profile"} />;
    return <LoginForm />;
  } else {
    return (
      <div>
        <LoginForm />
      </div>
    );
  }
};

export default LoginPart;
