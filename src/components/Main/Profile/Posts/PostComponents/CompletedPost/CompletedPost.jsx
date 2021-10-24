import React from "react";

const CompletedPost = (props) => {
  return (
    <div>
      {props.data.map((data) => (
        <div>{data.message}</div>
      ))}
    </div>
  );
};

export default CompletedPost;
