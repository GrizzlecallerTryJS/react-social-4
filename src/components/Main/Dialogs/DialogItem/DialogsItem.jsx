import styles from "./DialogsItem.module.css";
import MessageItem from "./MessageItem/MessageItem";
import { NavLink, Route } from "react-router-dom";
import React from "react";
import NewMessageContainer from "./NewMessage/NewMessageContainer";

const DialogsItem = (props) => {
  const MessagesForDialogs = () => {
    return (
      <div className={styles.messages_item}>
        <div>
          <MessageItem messages={props.messagesData} />
        </div>
        <div>
          <NewMessageContainer dialogId={props.id} />
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
