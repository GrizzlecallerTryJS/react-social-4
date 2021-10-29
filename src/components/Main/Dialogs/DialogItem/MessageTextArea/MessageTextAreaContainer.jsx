import React from "react";
import MessageTextArea from "./MessageTextArea";
import {
  addMessageAC,
  currentNewMessageTextAreaValueAC,
} from "../../../../../redux/dialogsReducer";

const MessageTextAreaContainer = (props) => {
  const sendMessageButtonAction = () => {
    props.dispatch(addMessageAC(props.dialogId));
  };

  const onChange = (text) => {
    props.dispatch(currentNewMessageTextAreaValueAC(text));
  };

  return (
    <div>
      <MessageTextArea
        sendMessage={sendMessageButtonAction}
        onChange={onChange}
        textAreaData={props.textAreaData.message}
      />
    </div>
  );
};

export default MessageTextAreaContainer;
