import rerender from "../rerender";

let state = {
  profilePage: {
    postData: [
      { id: 1, message: `first`, likesCount: 4 },
      { id: 2, message: `second`, likesCount: 6 },
      { id: 3, message: "lorem", likesCount: 2 },
    ],
    tempPostData: { message: `` },
  },
  dialogsPage: {
    dialogsData: [
      { id: 1, name: `qw` },
      { id: 2, name: `we` },
      { id: 3, name: `er` },
      { id: 4, name: `rt` },
      { id: 5, name: `ty` },
    ],
    messagesData: [
      { id: 1, message: `Lorem ipsum dolor sit.` },
      {
        id: 2,
        message: `Lorem sit amet, consectetur adipisicing elit. Accusanti,`,
      },
      { id: 3, message: `Lorem ipsum dolor sit amet.` },
      {
        id: 4,
        message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
      },
      { id: 5, message: `Lorem ipsum dolor sit amet, consectetur.` },
      { id: 6, message: `Lorem ipsum dolor sit.` },
    ],
    tempMessageData: { message: `ee` },
  },
  navbarState: {
    title: [
      { name: `Profile`, id: 1 },
      { name: `Dialogs`, id: 2 },
      { name: `News`, id: 3 },
      { name: `Music`, id: 4 },
      { name: `People`, id: 5 },
      { name: `Friends`, id: 6 },
    ],
    actualFriends: [
      {
        name: `Vasya`,
        id: 1,
      },
      {
        name: `Kolya`,
        id: 2,
      },
    ],
  },
};

/*Posts*/

export const currentNewPostTextAreaValue = (text) => {
  state.profilePage.tempPostData.message = text;
  rerender();
};

export const addPostFunc = () => {
  if (state.profilePage.tempPostData.message.length > 0) {
    let postObject = {
      id: state.profilePage.postData.length + 1,
      message: state.profilePage.tempPostData.message,
      likesCount: 0,
    };
    state.profilePage.postData.push(postObject);
    state.profilePage.tempPostData.message = "";
    rerender();
  }
};

/*Messages*/

export const currentNewMessageTextAreaValue = (text) => {
  state.dialogsPage.tempMessageData.message = text;
  rerender();
};

export const addMessageFunc = () => {
  if (state.dialogsPage.tempMessageData.message.length > 0) {
    let postObject = {
      id: state.dialogsPage.messagesData.length + 1,
      message: state.dialogsPage.tempMessageData.message,
    };
    state.dialogsPage.messagesData.push(postObject);
    state.dialogsPage.tempMessageData.message = "";
    rerender();
  }
};

window.state = state;

export default state;
