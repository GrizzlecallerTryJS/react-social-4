import React from "react";
import styles from "./Dialogs.module.css";
import DialogsAll from "./DialogItem/DialogsAll";
import MessageItem from "./MessageItem/MessageItem";

const Dialogs = (props) => {
  return (
    <div>
      <div>Dialogs</div>
      <div className={styles.main}>
        <div className={styles.dialog_item}>
          <DialogsAll dialogs={props.dialogsData} />
        </div>
        <div className={styles.messages_item}>
          <MessageItem messages={props.messagesData} />
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
