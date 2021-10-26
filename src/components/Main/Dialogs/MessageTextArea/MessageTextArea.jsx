import React from "react";

const MessageTextArea = (props) => {
  let textAreaRef = React.createRef();

  const sendMessageButtonAction = () => {
    props.addMessageFunc();
  };

  const onChangeAction = () => {
    let text = textAreaRef.current.value;
    props.currentNewMessageTextAreaValue(text);
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
