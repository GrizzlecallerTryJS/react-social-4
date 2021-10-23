import React from "react";
import styles from "./Main.module.css";
import { Route } from "react-router-dom";
import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";
import Music from "./Music/Music";
import News from "./News/News";
import People from "./People/People";

const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <Route path={`/profile`} component={Profile} />
        <Route path={`/dialogs`} component={Dialogs} />
        <Route path={`/news`} component={News} />
        <Route path={`/music`} component={Music} />
        <Route path={`/people`} component={People} />
      </div>
    </div>
  );
};

export default Main;
