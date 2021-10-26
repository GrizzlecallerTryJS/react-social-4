import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

const rerender = (
  state = null,
  addPostFunc = null,
  currentNewPostTextAreaValue = null
) => {
  ReactDOM.render(
    <React.StrictMode>
      <Router>
        <App
          state={state}
          addPostFunc={addPostFunc}
          currentNewPostTextAreaValue={currentNewPostTextAreaValue}
        />
      </Router>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

export default rerender;
