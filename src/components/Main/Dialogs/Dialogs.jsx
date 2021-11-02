import React from "react";
import DialogList from "./DialogItem/DialogList";
import styles from "./Dialogs.module.css";
import { connect } from "react-redux";

const mstp = (state) => {
  return {
    dialogsData: state.dialogsPage.dialogsData,
  };
};

const DialogListContainer = connect(mstp, {})(DialogList);

const Dialogs = () => {
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
