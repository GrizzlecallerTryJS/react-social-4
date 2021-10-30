import React from "react";
import NewPostContainer from "./PostComponents/NewPost/NewPostContainer";
import CompletedPostContainer from "./PostComponents/CompletedPost/CompletedPostContainer";

const Posts = () => {
  return (
    <div>
      <NewPostContainer />
      <CompletedPostContainer />
    </div>
  );
};

export default Posts;
