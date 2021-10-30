import "./index.css";
import reportWebVitals from "./reportWebVitals";
import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import store from "./redux/reduxStore";
import { Provider } from "react-redux";

const rerender = (state) => {
  ReactDOM.render(
    <Router>
      <Provider store={store}>
        <App state={state} dispatch={store.dispatch.bind(store)} />
      </Provider>
    </Router>,
    document.getElementById("root")
  );
};

rerender(store.getState());

store.subscribe(() => {
  rerender(store.getState());
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
