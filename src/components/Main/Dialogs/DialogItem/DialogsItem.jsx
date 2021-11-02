import NewMessageContainer from "./NewMessage/NewMessageContainer";
import React from "react";
import MessageItem from "./MessageItem/MessageItem";

const DialogsItem = (props) => {
  const MessagesForDialogs = () => {
    return (
      <div>
        <div>
          {" "}
          <MessageItem messages={props.messagesData} />
        </div>
        <div>
          <NewMessageContainer dialogId={props.dialogId} />
        </div>
      </div>
    );
  };

  return (
    <div>
      <MessagesForDialogs />
    </div>
  );
};

export default DialogsItem;
