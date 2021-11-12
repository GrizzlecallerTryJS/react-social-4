import React from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import styles from "./UsersPagination.module.css";

const UsersPagination = (props) => {
  let pages = [];
  for (let i = 1; i < props.pagesCount / 100; i++) {
    pages[i - 1] = i;
  }

  let getU = (item) => {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users/?page=${item}`)
      .then((response) => {
        props.setUsers(response.data.items);
        props.setCurrentPage(item);
      });
  };

  return (
    <div>
      {pages.map((item) => (
        <span
          className={styles.item}
          onClick={() => {
            getU(item);
          }}
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
