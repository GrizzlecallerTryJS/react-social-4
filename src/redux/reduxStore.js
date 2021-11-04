import { combineReducers, createStore } from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import navbarReducer from "./navbarReducer";
import usersReducer from "./usersReducer";

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  navbarState: navbarReducer,
  usersState: usersReducer,
});

let store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

window.store = store;

export default store;
