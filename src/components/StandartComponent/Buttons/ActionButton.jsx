import React from "react";

const ActionButton = (props) => {
  return (
    <div>
      <button onClick={props.buttonAction} name={props.buttonName}>
        {props.buttonName}
      </button>
    </div>
  );
};

export default ActionButton;
