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
  const Textarea = props.Textarea;

  return (
    <div>
      <Textarea
        textAreaRef={textAreaRef}
        onChangeAction={onChangeAction}
        textareaName={props.textareaName}
        textareaValue={props.textareaValue}
      />
      <ButtonSend
        buttonAction={sendMessageAction}
        buttonName={props.buttonName}
      />
    </div>
  );
};

export default MessageTextArea;
