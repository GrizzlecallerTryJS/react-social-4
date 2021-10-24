import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";

const dialogsData = [
  { id: 1, name: `qw` },
  { id: 2, name: `we` },
  { id: 3, name: `er` },
  { id: 4, name: `rt` },
  { id: 5, name: `ty` },
];

const messagesData = [
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
];

const postData = [
  { message: `first` },
  { message: `second` },
  { message: "lorem" },
];

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App
        dialogsData={dialogsData}
        messagesData={messagesData}
        postData={postData}
      />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
