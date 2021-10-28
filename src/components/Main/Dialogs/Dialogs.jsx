import React from "react";
import DialogsAll from "./DialogItem/DialogsAll";
import styles from "./Dialogs.module.css";

const Dialogs = (props) => {
  return (
    <div>
      <div>Dialogs</div>
      <div className={styles.main}>
        <DialogsAll
          dialogsState={props.dialogsState}
          dispatch={props.dispatch}
        />
      </div>
    </div>
  );
};

export default Dialogs;
