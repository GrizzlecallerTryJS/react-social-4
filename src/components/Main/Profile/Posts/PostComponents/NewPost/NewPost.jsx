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

  return (
    <div>
      <p>New post</p>
      <div>
        <textarea
          ref={textAreaRef}
          onChange={onChangeAction}
          name={`newPost`}
          value={props.textAreaValue}
        />

        <ButtonSend
          buttonAction={addPostAction}
          buttonName={props.buttonName}
        />
      </div>
    </div>
  );
};

export default NewPost;
