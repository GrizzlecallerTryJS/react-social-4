import React from "react";
import styles from "./Dialogs_all.module.css";
import DialogsItem from "./DialogsItem";

const DialogItemContainer = (props) => {
  return (
    <div className={styles.dialog_item}>
      {props.dialogsState.dialogsData.map((data) => (
        <DialogsItem
          key={data.id}
          name={data.name}
          id={data.id}
          messages={data.messagesData}
          textAreaData={props.dialogsState.tempMessageData}
          dispatch={props.dispatch}
        />
      ))}
    </div>
  );
};

export default DialogItemContainer;
