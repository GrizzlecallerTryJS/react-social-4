import React from "react";

const NewPost = (props) => {
  let textAreaRef = React.createRef();

  const addPostButtonAction = () => {
    let action = {
      type: `ADD_POST`,
    };
    props.dispatch(action);
  };

  const onChangeAction = () => {
    let action = {
      type: `CURRENT_NEW_POST_TEXT`,
      text: textAreaRef.current.value,
    };
    props.dispatch(action);
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
