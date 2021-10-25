import React from "react";

const NewPost = (props) => {
  let textAreaRef = React.createRef();

  const addButtonAction = () => {
    let text = textAreaRef.current.value;
    props.addPostFunc(text);
  };

  return (
    <div>
      <p>New post</p>
      <div>
        <textarea ref={textAreaRef} name="newPost"></textarea>
        <div>
          <button onClick={addButtonAction}>addPost</button>
        </div>
      </div>
    </div>
  );
};

export default NewPost;
