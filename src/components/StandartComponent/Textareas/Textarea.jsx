import React from "react";

const Textarea = (props) => {
  return (
    <div>
      <textarea
        ref={props.textAreaRef}
        onChange={props.onChangeAction}
        name={props.textareaName}
        value={props.textareaValue}
      />
    </div>
  );
};

export default Textarea;
