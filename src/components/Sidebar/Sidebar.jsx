import React from "react";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.item}>
        <div>smth1</div>
        <div>smth2</div>
        <div>smth3</div>
        <div>smth4</div>
        <div>smth5</div>
      </div>
    </div>
  );
};

export default Sidebar;
