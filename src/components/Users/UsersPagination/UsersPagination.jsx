import React from "react";
import axios from "axios";
import { setUsersAC } from "../../../redux/usersReducer";
import { NavLink } from "react-router-dom";

const UsersPagination = (props) => {
  let item = [];
  for (let i = 1; i < props.pagesCount / 100; i++) {
    item[i - 1] = i;
  }

  let getU = (item) => {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users/?page=${item}`)
      .then((response) => {
        setUsersAC(response.data.items);
      });
  };

  return (
    <div>
      {item.map((item) => (
        <span
          onClick={() => {
            getU(item);
          }}
        >
          <NavLink to={`/users/${item}`}>{item}</NavLink>
        </span>
      ))}
    </div>
  );
};

export default UsersPagination;
