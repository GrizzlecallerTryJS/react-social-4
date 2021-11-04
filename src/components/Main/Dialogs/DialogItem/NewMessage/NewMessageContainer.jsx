import NewMessage from "./NewMessage";
import {
  addMessageAC,
  currentNewMessageTextAreaValueAC,
} from "../../../../../redux/dialogsReducer";
import { connect } from "react-redux";
import ActionButton from "../../../../StandartComponent/Buttons/ActionButton";
import Textarea from "../../../../StandartComponent/Textareas/Textarea";

let mapStateToProps = (state) => {
  return {
    textareaValue: state.dialogsPage.tempMessageData.message,
    ButtonSend: ActionButton,
    buttonName: "Send Message",
    Textarea: Textarea,
    textareaName: "Message textarea",
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    onChange: (text, dialogId) => {
      dispatch(currentNewMessageTextAreaValueAC(text, dialogId));
    },
    sendMessage: (dialogId) => {
      dispatch(addMessageAC(dialogId));
    },
  };
};

const NewMessageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewMessage);

export default NewMessageContainer;
