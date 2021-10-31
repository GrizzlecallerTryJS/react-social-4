import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import navbarReducer from "./navbarReducer";

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
      tempMessageData: [{ message: "", textAreaId: 1 }],
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

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.navbarState = navbarReducer(this._state.navbarState, action);
    this._callSubscriber(this._state);
  },
};

export default store;
