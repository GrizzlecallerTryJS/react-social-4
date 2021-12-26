import React from "react";

const CompletedPost = (props) => {
  return (
    <div>
      {props.postData.map((data) => (
        <div key={data.id}>{data.message}</div>
      ))}
    </div>
  );
};

export default CompletedPost;
