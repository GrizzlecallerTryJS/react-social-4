import React from "react";
import DialogList from "./DialogItem/DialogList";
import styles from "./Dialogs.module.css";
import { connect } from "react-redux";

const Dialogs = () => {
  let mstp = (state) => {
    return {
      dialogsState: state.dialogsPage,
    };
  };

  const DialogListContainer = connect(mstp, {})(DialogList);
  return (
    <div>
      <div>Dialogs</div>
      <div className={styles.main}>
        <DialogListContainer />
      </div>
    </div>
  );
};

export default Dialogs;
