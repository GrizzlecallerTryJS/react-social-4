import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.item}>
        <div>
          <a href={`/profile`}>Profile</a>
        </div>
        <div>
          <a href={`/messages`}>Messages</a>
        </div>
        <div>
          <a href={`/news`}>News</a>
        </div>
        <div>
          <a href={`/music`}>Music</a>
        </div>
        <div>
          <a href={`/people`}>People</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
