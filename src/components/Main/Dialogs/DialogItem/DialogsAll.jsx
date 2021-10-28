import React from "react";
import styles from "./Dialogs_all.module.css";
import { NavLink, Route } from "react-router-dom";
import MessageItem from "./MessageItem/MessageItem";
import MessageTextArea from "./MessageTextArea/MessageTextArea";

const DialogsItem = (props) => {
  const MessagesForDialogs = () => {
    return (
      <div className={styles.messages_item}>
        <div>
          <MessageItem messages={props.messages} />
        </div>
        <div>
          <MessageTextArea
            textAreadata={props.textAreaData}
            dispatch={props.dispatch}
            dialogId={props.id}
          />
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

const DialogsAll = (props) => {
  return (
    <div className={styles.dialog_item}>
      {props.dialogsState.dialogsData.map((data) => (
        <DialogsItem
          key={data.id}
          name={data.name}
          id={data.id}
          messages={data.messagesData}
          textAreaData={props.dialogsState.tempMessageData}
          dispatch={props.dispatch}
        />
      ))}
    </div>
  );
};

export default DialogsAll;
