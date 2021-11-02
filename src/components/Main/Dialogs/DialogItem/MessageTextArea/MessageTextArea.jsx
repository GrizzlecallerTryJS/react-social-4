import React from "react";

const MessageTextArea = (props) => {
  let textAreaRef = React.createRef();

  const onChangeAction = () => {
    let text = textAreaRef.current.value;
    props.onChange(text, props.dialogId);
  };

  const sendMessageAction = () => {
    return props.sendMessage(props.dialogId);
  };

  const ButtonSend = props.ButtonSend;

  return (
    <div>
      <textarea
        ref={textAreaRef}
        name={`newMessage`}
        onChange={onChangeAction}
        value={props.textAreaData}
      />
      <div>
        <ButtonSend
          buttonAction={sendMessageAction}
          buttonName={props.buttonName}
        />
      </div>
    </div>
  );
};

export default MessageTextArea;
