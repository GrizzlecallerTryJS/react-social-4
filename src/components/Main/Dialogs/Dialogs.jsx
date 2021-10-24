import React from "react";
import styles from "./Dialogs.module.css";
import Dialogs_all from "./DialogItem/Dialogs_all";
import MessageItem from "./MessageItem/MessageItem";

const dialogsData = [
  { id: 1, name: `qw` },
  { id: 2, name: `we` },
  { id: 3, name: `er` },
  { id: 4, name: `rt` },
  { id: 5, name: `ty` },
];

const messagesData = [
  { message: `Lorem ipsum dolor sit.`, id: 1 },
  {
    message: `Lorem sit amet, consectetur adipisicing elit. Accusanti,`,
    id: 1,
  },
  { message: `Lorem ipsum dolor sit amet.`, id: 2 },
  {
    message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
    id: 3,
  },
  { message: `Lorem ipsum dolor sit amet, consectetur.`, id: 4 },
  { message: `Lorem ipsum dolor sit.`, id: 5 },
];

const Dialogs = () => {
  return (
    <div>
      <div>Dialogs</div>
      <div className={styles.main}>
        <div className={styles.dialog_item}>
          <Dialogs_all dialogs={dialogsData} />
        </div>
        <div className={styles.messages_item}>
          <MessageItem messages={messagesData} />
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
