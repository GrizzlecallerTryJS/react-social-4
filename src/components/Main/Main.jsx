import React from "react";
import Profile from "./Profile/Profile";
import styles from "./Main.module.css";

const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <Profile />
        {/*<Messages />*/}
      </div>
    </div>
  );
};

export default Main;
