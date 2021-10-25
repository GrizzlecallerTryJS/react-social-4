import React from "react";

const NewPost = () => {
  let textAreaRef = React.createRef();

  const addButtonAction = () => {
    let text = textAreaRef.current.value;
    alert(text);
  };

  return (
    <div>
      <p>New post</p>
      <div>
        <textarea ref={textAreaRef} name="newPost"></textarea>
        <button onClick={addButtonAction}>addPost</button>
      </div>
    </div>
  );
};

export default NewPost;
