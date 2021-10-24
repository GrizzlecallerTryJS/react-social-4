import React from "react";

const MessageItem = (props) => {
  return (
    <div>
      {props.messages.map((message) => (
        <div>{message.message}</div>
      ))}
    </div>
  );
};

export default MessageItem;
