import React from "react";
import styles from "./NewPost.module.css";

const NewPost = () => {
  return (
    <div className={styles.new_post}>
      <p>New post</p>
      <textarea name="newPost"></textarea>
    </div>
  );
};

export default NewPost;
