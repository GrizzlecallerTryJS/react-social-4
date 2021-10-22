import React from "react";
import styles from "./Messages.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";

const Messages = () => {
  return (
    <div>
      <div>Messages</div>
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

export default Messages;
