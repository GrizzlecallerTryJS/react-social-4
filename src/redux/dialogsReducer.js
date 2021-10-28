import {
  _addMessageFunc,
  _currentNewMessageTextAreaValue,
} from "./dialogFunc/dialogFunc";

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
  tempMessageData: [{ message: "" }],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      _addMessageFunc(state, action.dialogId);
      return state;
    case CURRENT_NEW_MESSAGE_TEXT:
      _currentNewMessageTextAreaValue(state, action.text);
      return state;
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

export const currentNewMessageTextAreaValueAC = (text) => {
  return {
    type: CURRENT_NEW_MESSAGE_TEXT,
    text: text,
  };
};

export default dialogsReducer;
