import { _followFunc } from "./usersFunc/usersFunc";

const FOLLOW = "FOLLOW";

const initialState = {
  userData: [
    {
      id: 1,
      firstName: "Kolya",
      lastName: "Lupkin",
      age: 18,
      country: "russia",
      city: "moscow",
      status: "type status here",
      avatar: "",
      followStatus: false,
    },
    {
      id: 2,
      firstName: "agdfg",
      lastName: "dfg",
      age: 47,
      country: "russia",
      city: "moscow",
      status: "type status here",
      avatar: "",
      followStatus: false,
    },
    {
      id: 3,
      firstName: "iiii",
      lastName: "Lupkooooin",
      age: 56,
      country: "russia",
      city: "moscow",
      status: "type status here",
      avatar: "",
      followStatus: false,
    },
  ],
};

const usersReducer = (state = initialState, action) => {
  let stateCopy = { ...state, userData: state.userData.map((user) => user) };
  switch (action.type) {
    case FOLLOW:
      stateCopy.userData.map((user) => {
        if (user.id === action.userId) {
          _followFunc(user, action.followStatus);
        }
      });
      return stateCopy;
    default:
      return state;
  }
};

export default usersReducer;

export const followAC = (userId, followStatus) => {
  return {
    type: FOLLOW,
    userId,
    followStatus,
  };
};
