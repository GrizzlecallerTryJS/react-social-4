import React from "react";
import styles from "./Dialogs_all.module.css";
import { NavLink } from "react-router-dom";
import DialogsItemContainer from "./DialogsItemContainer";

const DialogList = (props) => {
  return (
    <div className={styles.dialog_item}>
      {props.dialogsData.map((data) => (
        <div>
          <NavLink
            key={data.id}
            to={`/dialogs/${data.name.toLowerCase()}`}
            activeClassName={styles.active}
          >
            {data.name}
            <DialogsItemContainer
              dialogName={data.name}
              dialogId={data.id}
              messagesData={data.messagesData}
            />
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default DialogList;
