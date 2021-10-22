import React from "react";
import styles from "./Profile.module.css";
import Post from "./Post_modules/Post/Post";
import NewPost from "./Post_modules/NewPost/NewPost";

const Main = () => {
  return (
    <div className={styles.main}>
      <div>Main</div>
      <div className={styles.about}>
        avatar + desc
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv1vgdYWHDUkyYYYxV4RV78Q4AHDtagK2GRQ&usqp=CAU"
            alt="default avatar image"
          />
        </div>
      </div>
      <NewPost />
      <Post />
      <Post />
    </div>
  );
};

export default Main;
