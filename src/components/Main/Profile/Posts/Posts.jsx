import React from "react";
import NewPost from "./PostComponents/NewPost/NewPost";
import CompletedPost from "./PostComponents/CompletedPost/CompletedPost";

const Posts = (props) => {
  return (
    <div>
      <NewPost
        textAreaValue={props.profileState.tempPostData}
        dispatch={props.dispatch}
      />
      <CompletedPost postData={props.profileState.postData} />
    </div>
  );
};

export default Posts;
