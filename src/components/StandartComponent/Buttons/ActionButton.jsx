import React from "react";
import styles from "./ButtonSend.module.css";

const ActionButton = (props) => {
  return (
    <div className={styles.button}>
      <button onClick={props.buttonAction} name={props.buttonName}>
        {props.buttonName}
      </button>
    </div>
  );
};

export default ActionButton;
