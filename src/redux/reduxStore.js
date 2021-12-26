import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import navbarReducer from "./navbarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleWare from "redux-thunk";
import appReducer from "./appReducer";

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  navbarState: navbarReducer,
  usersState: usersReducer,
  authState: authReducer,
  appState: appReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleWare))
);

window.store = store;

export default store;
