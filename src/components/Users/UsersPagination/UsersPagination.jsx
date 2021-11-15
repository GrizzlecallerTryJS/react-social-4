import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./UsersPagination.module.css";

const UsersPagination = (props) => {
  let pages = [];
  for (let i = 1; i < props.pagesCount / 100; i++) {
    pages[i - 1] = i;
  }

  return (
    <div>
      {pages.map((item) => (
        <span
          className={styles.item}
          onClick={() => {
            props.getUsers(item);
          }}
          key={item}
        >
          <NavLink exact to={`/users/${item}`} activeClassName={styles.active}>
            {item}
          </NavLink>
        </span>
      ))}
    </div>
  );
};

export default UsersPagination;
