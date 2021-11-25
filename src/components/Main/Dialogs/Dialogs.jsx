import React from "react";
import DialogList from "./DialogItem/DialogList";
import styles from "./Dialogs.module.css";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../StandartComponent/hoc/withAuthRedirect";
import { compose } from "redux";

const Dialogs = () => {
  let mapStateToProps = (state) => {
    return {
      dialogsState: state.dialogsPage,
    };
  };
  let mapDispatchToProps = (dispatch) => {};

  const DialogListContainer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
  )(DialogList);

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
