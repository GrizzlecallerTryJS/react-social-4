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
      {pages.map((pageNumber) => (
        <span
          className={styles.item}
          onClick={() => {
            props.getUsers(props.usersOnPageCount, pageNumber);
          }}
          key={pageNumber}
        >
          <NavLink
            exact
            to={`/users/${pageNumber}`}
            activeClassName={styles.active}
          >
            {pageNumber}
          </NavLink>
        </span>
      ))}
    </div>
  );
};

export default UsersPagination;
