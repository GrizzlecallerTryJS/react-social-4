import React from "react";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import rerender from "./rerender";
import state, { addPostFunc } from "./redux/state";

rerender(state, addPostFunc);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
