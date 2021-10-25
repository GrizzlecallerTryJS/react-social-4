import React from "react";
import styles from "./Dialogs.module.css";
import DialogsAll from "./DialogItem/DialogsAll";
import MessageItem from "./MessageItem/MessageItem";
import MessageTextArea from "./MessageTextArea/MessageTextArea";

const Dialogs = (props) => {
  return (
    <div>
      <div>Dialogs</div>
      <div className={styles.main}>
        <div className={styles.dialog_item}>
          <DialogsAll dialogs={props.dialogsState.dialogsData} />
        </div>
        <div className={styles.messages_item}>
          <div>
            <MessageItem messages={props.dialogsState.messagesData} />
          </div>
          <div>
            <MessageTextArea />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
