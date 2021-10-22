import React from "react";
import styles from "./MessageItem.module.css";

const MessageItem = () => {
  return (
    <div className={styles.messages_item}>
      <div>Lorem ipsum dolor sit.</div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium,
        quibusdam.
      </div>
      <div>Lorem ipsum dolor sit amet.</div>
      <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
      <div>Lorem ipsum dolor sit amet, consectetur.</div>
    </div>
  );
};

export default MessageItem;
