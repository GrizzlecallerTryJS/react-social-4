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
};

export default state;
