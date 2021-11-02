import React from "react";

const NewPost = (props) => {
  let textAreaRef = React.createRef();

  const onChangeAction = () => {
    let text = textAreaRef.current.value;
    props.onChange(text);
  };

  const addPostAction = () => {
    return props.addPost();
  };

  const ButtonSend = props.ButtonSend;
  const Textarea = props.Textarea;

  return (
    <div>
      <p>New post</p>
      <Textarea
        textAreaRef={textAreaRef}
        onChangeAction={onChangeAction}
        textareaName={props.textareaName}
        textareaValue={props.textareaValue}
      />
      <ButtonSend buttonAction={addPostAction} buttonName={props.buttonName} />
    </div>
  );
};

export default NewPost;
