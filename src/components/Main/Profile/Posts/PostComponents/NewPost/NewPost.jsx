import React from "react";

const NewPost = (props) => {
  debugger;
  let textMessage = props.textAreaValue.message;
  let textAreaRef = React.createRef();

  const addPostButtonAction = () => {
    props.addPostFunc();
    textAreaRef.current.value = ``;
    props.currentNewPostTextAreaValue("");
  };

  const onChangeAction = () => {
    let text = textAreaRef.current.value;
    props.currentNewPostTextAreaValue(text);
  };

  return (
    <div>
      <p>New post</p>
      <div>
        <textarea ref={textAreaRef} onChange={onChangeAction} name="newPost">
          {textMessage}
        </textarea>
        <div>
          <button onClick={addPostButtonAction}>addPost</button>
        </div>
      </div>
    </div>
  );
};

export default NewPost;
