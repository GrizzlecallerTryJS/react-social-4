import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

const rerender = (state = null, addPostFunc = null, addPostTemp = null) => {
  ReactDOM.render(
    <React.StrictMode>
      <Router>
        <App
          state={state}
          addPostFunc={addPostFunc}
          addPostTemp={addPostTemp}
        />
      </Router>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

export default rerender;
