import React from "react";
import {
  addMessageAC,
  currentNewMessageTextAreaValueAC,
} from "../../../../redux/state";

const MessageTextArea = (props) => {
  let textAreaRef = React.createRef();

  const sendMessageButtonAction = () => {
    props.dispatch(addMessageAC());
  };

  const onChangeAction = () => {
    let text = textAreaRef.current.value;
    props.dispatch(currentNewMessageTextAreaValueAC(text));
  };

  return (
    <div>
      <textarea
        ref={textAreaRef}
        name={`message`}
        onChange={onChangeAction}
        value={props.textAreaValue.message}
      />
      <div>
        <button onClick={sendMessageButtonAction} name={`sentMessage`}>
          Send
        </button>
      </div>
    </div>
  );
};

export default MessageTextArea;
