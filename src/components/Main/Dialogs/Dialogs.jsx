import React from "react";
import DialogItemContainer from "./DialogItem/DialogItemContainer";
import styles from "./Dialogs.module.css";

const Dialogs = (props) => {
  return (
    <div>
      <div>Dialogs</div>
      <div className={styles.main}>
        <DialogItemContainer
          dialogsState={props.dialogsState}
          dispatch={props.dispatch}
        />
      </div>
    </div>
  );
};

export default Dialogs;
