import React from "react";
import NewPost from "./PostComponents/NewPost/NewPost";
import CompletedPost from "./PostComponents/CompletedPost/CompletedPost";

const Posts = (props) => {
  return (
    <div>
      <NewPost
        addPostFunc={props.addPostFunc}
        currentNewPostTextAreaValue={props.currentNewPostTextAreaValue}
      />
      <CompletedPost postData={props.profileState.postData} />
    </div>
  );
};

export default Posts;
