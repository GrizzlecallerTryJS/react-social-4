import React from "react";

const NewPost = (props) => {
  let textAreaRef = React.createRef();

  const addButtonAction = () => {
    props.addPostFunc();
    textAreaRef.current.value = ``;
  };

  const onChangeAction = () => {
    let text = textAreaRef.current.value;
    props.addPostTemp(text);
  };

  return (
    <div>
      <p>New post</p>
      <div>
        <textarea
          ref={textAreaRef}
          onChange={onChangeAction}
          name="newPost"
        ></textarea>
        <div>
          <button onClick={addButtonAction}>addPost</button>
        </div>
      </div>
    </div>
  );
};

export default NewPost;
