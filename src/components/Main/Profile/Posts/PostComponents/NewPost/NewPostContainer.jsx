import React from "react";
import NewPost from "./NewPost";
import {
  addPostAC,
  currentNewPostTextAreaValueAC,
} from "../../../../../../redux/profileReducer";

const NewPostContainer = (props) => {
  const addPostButtonAction = () => {
    props.dispatch(addPostAC());
  };

  const onChange = (text) => {
    props.dispatch(currentNewPostTextAreaValueAC(text));
  };

  return (
    <NewPost
      addPost={addPostButtonAction}
      onChange={onChange}
      textAreaValue={props.textAreaValue.message}
    />
  );
};

export default NewPostContainer;
