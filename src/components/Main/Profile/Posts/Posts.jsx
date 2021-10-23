import React from "react";
import NewPost from "./PostComponents/NewPost/NewPost";
import CompletedPost from "./PostComponents/CompletedPost/CompletedPost";

const Posts = () => {
  return (
    <div>
      <NewPost />
      <CompletedPost message={`first`} />
      <CompletedPost message={`second`} />
    </div>
  );
};

export default Posts;
