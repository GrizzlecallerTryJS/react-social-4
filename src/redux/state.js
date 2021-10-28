const ADD_POST = "ADD_POST";
const SEND_MESSAGE = "SEND_MESSAGE";
const CURRENT_NEW_POST_TEXT = "CURRENT_NEW_POST_TEXT";
const CURRENT_NEW_MESSAGE_TEXT = "CURRENT_NEW_MESSAGE_TEXT";

let store = {
  _callSubscriber() {},

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  _state: {
    profilePage: {
      postData: [
        { id: 1, message: "first", likesCount: 4 },
        { id: 2, message: "second", likesCount: 6 },
        { id: 3, message: "lorem", likesCount: 2 },
      ],
      tempPostData: { message: "" },
    },
    dialogsPage: {
      dialogsData: [
        {
          id: 1,
          name: "qw",
          messagesData: [
            { id: 1, message: "Lorem ipsum dolor sit." },
            {
              id: 2,
              message:
                "Lorem sit amet, consectetur adipisicing elit. Accusanti,",
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
              message:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            },
          ],
        },
        {
          id: 3,
          name: "er",
          messagesData: [
            {
              id: 1,
              message:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
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
              message:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
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
    },
    navbarState: {
      title: [
        { name: "Profile", id: 1 },
        { name: "Dialogs", id: 2 },
        { name: "News", id: 3 },
        { name: "Music", id: 4 },
        { name: "People", id: 5 },
        { name: "Friends", id: 6 },
      ],
      actualFriends: [
        {
          name: "Vasya",
          id: 1,
        },
        {
          name: "Kolya",
          id: 2,
        },
      ],
    },
  },

  getState() {
    return this._state;
  },

  /*Posts*/

  _currentNewPostTextAreaValue(text) {
    this._state.profilePage.tempPostData.message = text;
    this._callSubscriber(this._state);
  },

  _addPostFunc() {
    if (this._state.profilePage.tempPostData.message.length > 0) {
      let postObject = {
        id: this._state.profilePage.postData.length + 1,
        message: this._state.profilePage.tempPostData.message,
        likesCount: 0,
      };
      this._state.profilePage.postData.push(postObject);
      this._state.profilePage.tempPostData.message = "";
      this._callSubscriber(this._state);
    }
  },

  /*/!*Messages*!/*/

  _currentNewMessageTextAreaValue(text) {
    this._state.dialogsPage.tempMessageData.message = text;
    this._callSubscriber(this._state);
  },

  _addMessageFunc(dialogId) {
    if (this._state.dialogsPage.tempMessageData.message.length > 0) {
      this._state.dialogsPage.dialogsData.map((dialog) => {
        if (dialog.id === dialogId) {
          let postObject = {
            id: dialog.messagesData.length + 1,
            message: this._state.dialogsPage.tempMessageData.message,
          };

          dialog.messagesData.push(postObject);
        }
      });

      this._state.dialogsPage.tempMessageData.message = "";
      this._callSubscriber(this._state);
    }
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      this._addPostFunc();
    } else if (action.type === SEND_MESSAGE) {
      this._addMessageFunc(action.dialogId);
    } else if (action.type === CURRENT_NEW_POST_TEXT) {
      this._currentNewPostTextAreaValue(action.text);
    } else if (action.type === CURRENT_NEW_MESSAGE_TEXT) {
      this._currentNewMessageTextAreaValue(action.text);
    }
  },
};

export const addPostAC = () => {
  return {
    type: ADD_POST,
  };
};

export const currentNewPostTextAreaValueAC = (text) => {
  return {
    type: CURRENT_NEW_POST_TEXT,
    text: text,
  };
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

window.store = store;

export default store;
