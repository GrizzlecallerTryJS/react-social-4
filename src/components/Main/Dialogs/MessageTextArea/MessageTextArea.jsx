import React from "react";

const MessageTextArea = () => {
  let textAreaRef = React.createRef();

  const sentMessage = () => {
    let text = textAreaRef.current.value;
    alert(text);
  };

  return (
    <div>
      <textarea ref={textAreaRef} name={`message`}></textarea>
      <div>
        <button onClick={sentMessage} name={`sentMessage`}>
          Send
        </button>
      </div>
    </div>
  );
};

export default MessageTextArea;
