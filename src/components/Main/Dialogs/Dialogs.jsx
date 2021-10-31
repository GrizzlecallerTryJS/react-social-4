import React from "react";
import DialogItemContainer from "./DialogItem/DialogItemContainer";
import styles from "./Dialogs.module.css";
import { connect } from "react-redux";

const Dialogs = () => {
  let mstpDialogItemContainer = (state) => {
    return {
      dialogsState: state.dialogsPage,
    };
  };

  const DialogItemContainerConnect = connect(
    mstpDialogItemContainer,
    {}
  )(DialogItemContainer);
  return (
    <div>
      <div>Dialogs</div>
      <div className={styles.main}>
        <DialogItemContainerConnect />
      </div>
    </div>
  );
};

export default Dialogs;
