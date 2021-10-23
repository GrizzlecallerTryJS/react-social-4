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

const Dialogs_all = () => {
  return (
    <div className={styles.dialog_item}>
      <DialogsItem name={`qw`} id={`1`} />
      <DialogsItem name={`we`} id={`2`} />
      <DialogsItem name={`er`} id={`3`} />
      <DialogsItem name={`rt`} id={`4`} />
      <DialogsItem name={`ty`} id={`5`} />
    </div>
  );
};

export default Dialogs_all;
