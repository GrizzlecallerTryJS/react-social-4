import React from "react";

const MessageTextArea = (props) => {
  let textAreaRef = React.createRef();

  const onChangeAction = () => {
    let text = textAreaRef.current.value;
    props.onChange(text);
  };

  const sendMessageAction = () => {
    return props.sendMessage();
  };

  return (
    <div>
      <textarea
        ref={textAreaRef}
        name={`newMessage`}
        onChange={onChangeAction}
        value={props.textAreaData}
      />
      <div>
        <button onClick={sendMessageAction} name={`sendMessage`}>
          Send
        </button>
      </div>
    </div>
  );
};

export default MessageTextArea;
