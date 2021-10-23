import React from "react";
import styles from "./DialogItem.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = () => {
  return (
    <div className={styles.dialog_item}>
      <div>
        <NavLink exact to={"/dialogs/qw"} activeClassName={styles.active}>
          qw
        </NavLink>
      </div>
      <div>
        <NavLink exact to={"/dialogs/we"} activeClassName={styles.active}>
          we
        </NavLink>
      </div>
      <div>
        <NavLink exact to={"/dialogs/er"} activeClassName={styles.active}>
          er
        </NavLink>
      </div>
      <div>
        <NavLink exact to={"/dialogs/rt"} activeClassName={styles.active}>
          rt
        </NavLink>
      </div>
      <div>
        <NavLink exact to={"/dialogs/ty"} activeClassName={styles.active}>
          ty
        </NavLink>
      </div>
    </div>
  );
};

export default DialogItem;
