import React from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.item}>
        <div>
          <NavLink to={`/profile`} activeClassName={styles.active}>
            Profile
          </NavLink>
        </div>
        <div>
          <NavLink to={`/messages`} activeClassName={styles.active}>
            Messages
          </NavLink>
        </div>
        <div>
          <NavLink to={`/news`} activeClassName={styles.active}>
            News
          </NavLink>
        </div>
        <div>
          <NavLink to={`/music`} activeClassName={styles.active}>
            Music
          </NavLink>
        </div>
        <div>
          <NavLink to={`/people`} activeClassName={styles.active}>
            People
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
