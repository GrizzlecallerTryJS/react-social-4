import React from "react";
import MessageTextArea from "./MessageTextArea";
import {
  addMessageAC,
  currentNewMessageTextAreaValueAC,
} from "../../../../../redux/dialogsReducer";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    textAreaData: state.dialogsPage.tempMessageData.message,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    onChange: (text) => {
      dispatch(currentNewMessageTextAreaValueAC(text));
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
