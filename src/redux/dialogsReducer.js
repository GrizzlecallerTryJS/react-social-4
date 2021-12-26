import {
  _addMessageFunc,
  _currentNewMessageTextAreaValue,
} from "./Func/dialogFunc/dialogFunc";

const SEND_MESSAGE = "SEND_MESSAGE";
const CURRENT_NEW_MESSAGE_TEXT = "CURRENT_NEW_MESSAGE_TEXT";

const initialState = {
  dialogsData: [
    {
      id: 1,
      name: "qw",
      messagesData: [
        { id: 1, message: "Lorem ipsum dolor sit." },
        {
          id: 2,
          message: "Lorem sit amet, consectetur adipisicing elit. Accusanti,",
        },
        { id: 3, message: "Lorem ipsum dolor sit amet." },
      ],
    },
    {
      id: 2,
      name: "we",
      messagesData: [
        {
          id: 1,
          message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        },
      ],
    },
    {
      id: 3,
      name: "er",
      messagesData: [
        {
          id: 1,
          message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        },
        { id: 2, message: "Lorem ipsum dolor sit amet, consectetur." },
      ],
    },
    {
      id: 4,
      name: "rt",
      messagesData: [
        {
          id: 1,
          message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        },
        { id: 2, message: "Lorem ipsum dolor sit amet, consectetur." },
        { id: 3, message: "Lorem ipsum dolor sit." },
      ],
    },
    {
      id: 5,
      name: "ty",
      messagesData: [
        { id: 1, message: "Lorem ipsum dolor sit amet, consectetur." },
        { id: 2, message: "Lorem ipsum dolor sit." },
      ],
    },
  ],
  tempMessageData: { message: "", textAreaId: 0 },
};

const dialogsReducer = (state = initialState, action) => {
  let stateCopy = { ...state };

  stateCopy.dialogsData = [...state.dialogsData];
  stateCopy.dialogsData.messagesData = [{ ...state.dialogsData.messagesData }];
  stateCopy.tempMessageData = { ...state.tempMessageData };

  switch (action.type) {
    case SEND_MESSAGE:
      _addMessageFunc(stateCopy, action.dialogId);
      return stateCopy;
    case CURRENT_NEW_MESSAGE_TEXT:
      _currentNewMessageTextAreaValue(
        stateCopy.tempMessageData,
        action.text,
        action.textAreaId
      );
      return stateCopy;
    default:
      return state;
  }
};

export const addMessageAC = (dialogId) => {
  return {
    type: SEND_MESSAGE,
    dialogId: dialogId,
  };
};

export const currentNewMessageTextAreaValueAC = (text, textAreaId = 0) => {
  return {
    type: CURRENT_NEW_MESSAGE_TEXT,
    text: text,
    textAreaId: textAreaId,
  };
};

export default dialogsReducer;
