import React from "react";

const NewPost = (props) => {
  let textAreaRef = React.createRef();

  const addPostButtonAction = () => {
    props.addPostFunc();
  };

  const onChangeAction = () => {
    let text = textAreaRef.current.value;
    props.currentNewPostTextAreaValue(text);
  };

  return (
    <div>
      <p>New post</p>
      <div>
        <textarea
          ref={textAreaRef}
          onChange={onChangeAction}
          name="newPost"
          value={props.textAreaValue.message}
        />
        <div>
          <button onClick={addPostButtonAction}>addPost</button>
        </div>
      </div>
    </div>
  );
};

export default NewPost;
