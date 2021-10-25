import React from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div className={styles.navbar}>
      <div className={styles.item}>
        {props.navbarState.title.map((title) => (
          <div>
            <NavLink to={`/${title.name}`} activeClassName={styles.active}>
              {title.name}
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
