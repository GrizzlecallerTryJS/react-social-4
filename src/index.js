import "./index.css";
import reportWebVitals from "./reportWebVitals";
import state, {
  addMessageFunc,
  addPostFunc,
  currentNewMessageTextAreaValue,
  currentNewPostTextAreaValue,
  subscribe,
} from "./redux/state";
import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

const rerender = (state) => {
  ReactDOM.render(
    <Router>
      <App
        state={state}
        addPostFunc={addPostFunc}
        currentNewPostTextAreaValue={currentNewPostTextAreaValue}
        addMessageFunc={addMessageFunc}
        currentNewMessageTextAreaValue={currentNewMessageTextAreaValue}
      />
    </Router>,
    document.getElementById("root")
  );
};

rerender(state);

subscribe(rerender);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
