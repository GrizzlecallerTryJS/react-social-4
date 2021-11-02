import React from "react";
import NewPost from "./NewPost";
import {
  addPostAC,
  currentNewPostTextAreaValueAC,
} from "../../../../../../redux/profileReducer";
import { connect } from "react-redux";
import ButtonSend from "../../../../../StandartComponent/Buttons/ButtonSend";

let mapStateToProps = (state) => {
  return {
    textAreaValue: state.profilePage.tempPostData.message,
    ButtonSend,
    buttonName: "Add Post",
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    onChange: (text) => {
      dispatch(currentNewPostTextAreaValueAC(text));
    },
    addPost: () => {
      dispatch(addPostAC());
    },
  };
};

const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost);

export default NewPostContainer;
