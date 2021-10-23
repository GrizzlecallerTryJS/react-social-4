import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";

const Dialogs = () => {
  return (
    <div>
      <div>Dialogs</div>
      <div className={styles.main}>
        <div className={styles.dialog_item}>
          <DialogItem />
        </div>
        <div className={styles.messages_item}>
          <MessageItem />
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
