import React from "react";
import CompletedPost from "./PostComponents/CompletedPost/CompletedPost";
import NewPostContainer from "./PostComponents/NewPost/NewPostContainer";

const Posts = (props) => {
  return (
    <div>
      <NewPostContainer
        textAreaValue={props.profileState.tempPostData}
        dispatch={props.dispatch}
      />
      <CompletedPost postData={props.profileState.postData} />
    </div>
  );
};

export default Posts;
