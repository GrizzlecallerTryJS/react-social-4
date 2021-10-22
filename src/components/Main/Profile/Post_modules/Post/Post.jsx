import React from "react";
import styles from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={styles.posts}>
      <div>{props.message}</div>
    </div>
  );
};

export default Post;
