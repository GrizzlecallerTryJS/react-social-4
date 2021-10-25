let state = {
  profilePage: {
    postData: [
      { message: `first` },
      { message: `second` },
      { message: "lorem" },
    ],
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
      { name: `Dialogs`, id: 1 },
      { name: `News`, id: 1 },
      { name: `Music`, id: 1 },
      { name: `People`, id: 1 },
      { name: `Friends`, id: 1 },
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

export default state;
