import React from "react";
import styles from "./Dialogs_all.module.css";
import { NavLink } from "react-router-dom";

const DialogsItem = (props) => {
  return (
    <div>
      <NavLink
        exact
        to={`/dialogs/${props.id}`}
        activeClassName={styles.active}
      >
        {props.name}
      </NavLink>
    </div>
  );
};

const Dialogs_all = (props) => {
  return (
    <div className={styles.dialog_item}>
      {props.dialogs.map((data) => (
        <DialogsItem key={data.id} name={data.name} id={data.id} />
      ))}
    </div>
  );
};

export default Dialogs_all;
