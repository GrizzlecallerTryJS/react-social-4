import React from "react";
import styles from "./Dialogs.module.css";
import Dialogs_all from "./DialogItem/Dialogs_all";
import MessageItem from "./MessageItem/MessageItem";

const Dialogs = () => {
  return (
    <div>
      <div>Dialogs</div>
      <div className={styles.main}>
        <div className={styles.dialog_item}>
          <Dialogs_all />
        </div>
        <div className={styles.messages_item}>
          <MessageItem />
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
