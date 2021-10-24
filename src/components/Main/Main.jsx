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
    return <Profile postData={props.postData} />;
  };

  const DialogsComponent = () => {
    return (
      <Dialogs
        dialogsData={props.dialogsData}
        messagesData={props.messagesData}
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
        <Route path={`/profile`} component={ProfileComponent} />
        <Route path={`/dialogs`} component={DialogsComponent} />
        <Route path={`/news`} component={NewsComponent} />
        <Route path={`/music`} component={MusicComponent} />
        <Route path={`/people`} component={PeopleComponent} />
      </div>
    </div>
  );
};

export default Main;
