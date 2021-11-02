import NewPost from "./NewPost";
import {
  addPostAC,
  currentNewPostTextAreaValueAC,
} from "../../../../../../redux/profileReducer";
import { connect } from "react-redux";
import ButtonSend from "../../../../../StandartComponent/Buttons/ButtonSend";
import Textarea from "../../../../../StandartComponent/Textareas/Textarea";

let mapStateToProps = (state) => {
  return {
    textareaValue: state.profilePage.tempPostData.message,
    ButtonSend: ButtonSend,
    buttonName: "Add Post",
    Textarea: Textarea,
    textareaName: "Post textarea",
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
