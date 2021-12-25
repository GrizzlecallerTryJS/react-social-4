const initialState = {
  title: [
    { name: "Profile", id: 1 },
    { name: "Dialogs", id: 2 },
    { name: "News", id: 3 },
    { name: "Music", id: 4 },
    { name: "People", id: 5 },
    { name: "Friends", id: 6 },
    { name: "Users", id: 7 },
    { name: "Login", id: 8 },
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
};

const navbarReducer = (state = initialState, action) => {
  return state;
};

export default navbarReducer;
