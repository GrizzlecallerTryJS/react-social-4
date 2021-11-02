import MessageTextArea from "./MessageTextArea";
import {
  addMessageAC,
  currentNewMessageTextAreaValueAC,
} from "../../../../../redux/dialogsReducer";
import { connect } from "react-redux";
import ButtonSend from "../../../../StandartComponent/Buttons/ButtonSend";
import Textarea from "../../../../StandartComponent/Textareas/Textarea";

let mapStateToProps = (state) => {
  return {
    textareaValue: state.dialogsPage.tempMessageData.message,
    ButtonSend: ButtonSend,
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

const MessageTextAreaContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageTextArea);

export default MessageTextAreaContainer;
