import React from "react";
import styles from "./Main.module.css";
import { Route } from "react-router-dom";
import Profile from "./Profile/Profile";
import Dialogs from "./Dialogs/Dialogs";
import Music from "./Music/Music";
import News from "./News/News";
import People from "./People/People";

const Main = (props) => {
  const ProfileComponent = () => {
    return (
      <Profile
        profileState={props.profileState}
        addPostFunc={props.addPostFunc}
        currentNewPostTextAreaValue={props.currentNewPostTextAreaValue}
      />
    );
  };

  const DialogsComponent = () => {
    return (
      <Dialogs
        dialogsState={props.dialogsState}
        addMessageFunc={props.addMessageFunc}
        currentNewMessageTextAreaValue={props.currentNewMessageTextAreaValue}
      />
    );
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

  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <Route path={`/profile`} render={ProfileComponent} />
        <Route path={`/dialogs`} render={DialogsComponent} />
        <Route path={`/news`} render={NewsComponent} />
        <Route path={`/music`} render={MusicComponent} />
        <Route path={`/people`} render={PeopleComponent} />
      </div>
    </div>
  );
};

export default Main;
