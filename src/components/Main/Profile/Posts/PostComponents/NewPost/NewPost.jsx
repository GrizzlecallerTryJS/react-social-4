import React from "react";

const NewPost = (props) => {
  debugger;
  let textAreaRef = React.createRef();

  const onChangeAction = () => {
    let text = textAreaRef.current.value;
    props.onChange(text);
  };

  const addPostAction = () => {
    return props.addPost();
  };

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
        <div>
          <button onClick={addPostAction} name={`addPost`}>
            addPost
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewPost;
