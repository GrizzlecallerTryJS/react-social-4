import React from "react";
import DialogList from "./DialogItem/DialogList";
import styles from "./Dialogs.module.css";
import { connect } from "react-redux";

const Dialogs = () => {
  let mapStateToProps = (state) => {
    return {
      dialogsState: state.dialogsPage,
      isAuth: state.authState.isAuth,
    };
  };

  const DialogListContainer = connect(mapStateToProps, {})(DialogList);
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
