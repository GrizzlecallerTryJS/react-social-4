import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import state, {
  addMessageFunc,
  addPostFunc,
  currentNewMessageTextAreaValue,
  currentNewPostTextAreaValue,
} from "./redux/state";

const rerender = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Router>
        <App
          state={state}
          addPostFunc={addPostFunc}
          currentNewPostTextAreaValue={currentNewPostTextAreaValue}
          addMessageFunc={addMessageFunc}
          currentNewMessageTextAreaValue={currentNewMessageTextAreaValue}
        />
      </Router>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

export default rerender;
