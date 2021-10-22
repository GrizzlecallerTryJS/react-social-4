import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.item}>
        <div>Profile</div>
        <div>Messages</div>
        <div>News</div>
        <div>Music</div>
        <div>People</div>
      </div>
    </div>
  );
};

export default Navbar;
