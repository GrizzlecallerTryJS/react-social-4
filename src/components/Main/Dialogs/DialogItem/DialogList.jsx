import React from "react";
import styles from "./DialogsItem.module.css";
import DialogsItem from "./DialogsItem";

const DialogList = (props) => {
  return (
    <div className={styles.dialog_item}>
      {props.dialogsState.dialogsData.map((data) => (
        <DialogsItem {...data} key={data.id} />
      ))}
    </div>
  );
};

export default DialogList;

/*
{props.dialogsState.dialogsData.map((data) => (
  <DialogsItem
    key={data.id}
    name={data.name}
    id={data.id}
    messages={data.messagesData}
    textAreaData={props.dialogsState.tempMessageData}
  />
))}*/
