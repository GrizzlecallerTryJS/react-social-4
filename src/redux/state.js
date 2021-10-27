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
        { id: 1, name: "qw" },
        { id: 2, name: "we" },
        { id: 3, name: "er" },
        { id: 4, name: "rt" },
        { id: 5, name: "ty" },
      ],
      messagesData: [
        { id: 1, message: "Lorem ipsum dolor sit." },
        {
          id: 2,
          message: "Lorem sit amet, consectetur adipisicing elit. Accusanti,",
        },
        { id: 3, message: "Lorem ipsum dolor sit amet." },
        {
          id: 4,
          message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        },
        { id: 5, message: "Lorem ipsum dolor sit amet, consectetur." },
        { id: 6, message: "Lorem ipsum dolor sit." },
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

  currentNewPostTextAreaValue(text) {
    this._state.profilePage.tempPostData.message = text;
    this._callSubscriber(this._state);
  },

  addPostFunc() {
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

  /*Messages*/

  currentNewMessageTextAreaValue(text) {
    this._state.dialogsPage.tempMessageData.message = text;
    this._callSubscriber(this._state);
  },

  addMessageFunc() {
    if (this._state.dialogsPage.tempMessageData.message.length > 0) {
      let postObject = {
        id: this._state.dialogsPage.messagesData.length + 1,
        message: this._state.dialogsPage.tempMessageData.message,
      };
      this._state.dialogsPage.messagesData.push(postObject);
      this._state.dialogsPage.tempMessageData.message = "";
      this._callSubscriber(this._state);
    }
  },
};

window.store = store;

export default store;
