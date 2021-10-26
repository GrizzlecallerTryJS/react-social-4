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
      { message: `Lorem ipsum dolor sit.`, id: 1 },
      {
        message: `Lorem sit amet, consectetur adipisicing elit. Accusanti,`,
        id: 1,
      },
      { message: `Lorem ipsum dolor sit amet.`, id: 2 },
      {
        message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
        id: 3,
      },
      { message: `Lorem ipsum dolor sit amet, consectetur.`, id: 4 },
      { message: `Lorem ipsum dolor sit.`, id: 5 },
    ],
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

export const currentNewPostTextAreaValue = (text) => {
  state.profilePage.tempPostData.message = text;
  rerender(state, addPostFunc, currentNewPostTextAreaValue);
};

export const addPostFunc = (
  postMessage = state.profilePage.tempPostData.message,
  postData = state.profilePage.postData
) => {
  let postObject = {
    id: postData.length + 1,
    message: postMessage,
    likesCount: 0,
  };
  postData.push(postObject);
  rerender(state, addPostFunc, currentNewPostTextAreaValue);
};

export default state;
