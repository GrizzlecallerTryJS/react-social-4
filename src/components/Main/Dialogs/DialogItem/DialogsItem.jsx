import styles from "./Dialogs_all.module.css";
import MessageItem from "./MessageItem/MessageItem";
import MessageTextAreaContainer from "./MessageTextArea/MessageTextAreaContainer";
import { NavLink, Route } from "react-router-dom";
import React from "react";

const DialogsItem = (props) => {
  const MessagesForDialogs = () => {
    return (
      <div className={styles.messages_item}>
        <div>
          <MessageItem messages={props.messages} />
        </div>
        <div>
          <MessageTextAreaContainer dialogId={props.id} />
        </div>
      </div>
    );
  };

  return (
    <div>
      <NavLink
        exact
        to={`/dialogs/${props.id}`}
        activeClassName={styles.active}
      >
        {props.name}
      </NavLink>
      <Route path={`/dialogs/${props.id}`} render={MessagesForDialogs} />
    </div>
  );
};

export default DialogsItem;
