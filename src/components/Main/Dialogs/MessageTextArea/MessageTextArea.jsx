import React from "react";

const MessageTextArea = (props) => {
  let textAreaRef = React.createRef();

  const sendMessageButtonAction = () => {
    let action = {
      type: `SEND_MESSAGE`,
    };
    props.dispatch(action);
  };

  const onChangeAction = () => {
    let action = {
      type: `CURRENT_NEW_MESSAGE_TEXT`,
      text: textAreaRef.current.value,
    };
    props.dispatch(action);
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
