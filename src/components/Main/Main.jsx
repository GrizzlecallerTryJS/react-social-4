import React from "react";
import styles from "./Main.module.css";
import { Route } from "react-router-dom";
import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";
import Music from "./Music/Music";
import News from "./News/News";
import People from "./People/People";
import Users from "../Users/Users";

const Main = () => {
  const ProfileComponent = () => {
    return <Profile />;
  };

  const DialogsComponent = () => {
    return <Dialogs />;
  };

  const NewsComponent = () => {
    return <News />;
  };

  const MusicComponent = () => {
    return <Music />;
  };

  const PeopleComponent = () => {
    return <People />;
  };

  const UsersComponent = () => {
    return <Users />;
  };

  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <Route path={`/profile/:userId?`} render={ProfileComponent} />
        <Route path={`/dialogs`} render={DialogsComponent} />
        <Route path={`/news`} render={NewsComponent} />
        <Route path={`/music`} render={MusicComponent} />
        <Route path={`/people`} render={PeopleComponent} />
        <Route path={`/users`} render={UsersComponent} />
      </div>
    </div>
  );
};

export default Main;
