import React from "react";
import NewPost from "./PostComponents/NewPost/NewPost";
import CompletedPost from "./PostComponents/CompletedPost/CompletedPost";

const Posts = (props) => {
  return (
    <div>
      <NewPost />
      <CompletedPost postData={props.postData} />
    </div>
  );
};

export default Posts;
