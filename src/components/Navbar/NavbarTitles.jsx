import React from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const NavbarTitles = (props) => {
  return (
    <div className={styles.navbar}>
      <div className={styles.item}>
        {props.navbarTitles.map((title) => (
          <div key={title.id}>
            <NavLink
              to={`/${title.name.toLowerCase()}`}
              activeClassName={styles.active}
            >
              {title.name}
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavbarTitles;
