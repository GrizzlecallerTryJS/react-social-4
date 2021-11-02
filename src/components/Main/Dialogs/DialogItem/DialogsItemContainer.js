import DialogsItem from "./DialogsItem";
import { Route } from "react-router-dom";

const DialogsItemContainer = (props) => {
  return (
    <Route
      path={`/dialogs/${props.dialogName}`}
      render={() => (
        <DialogsItem
          dialogName={props.dialogName}
          dialogId={props.dialogId}
          messagesData={props.messagesData}
        />
      )}
    />
  );
};

export default DialogsItemContainer;
