import React from "react";
import NewPost from "./PostComponents/NewPost/NewPost";
import CompletedPost from "./PostComponents/CompletedPost/CompletedPost";

const postData = [
  { message: `first` },
  { message: `second` },
  { message: "lorem" },
];

const Posts = () => {
  return (
    <div>
      <NewPost />
      <CompletedPost data={postData} />
    </div>
  );
};

export default Posts;
