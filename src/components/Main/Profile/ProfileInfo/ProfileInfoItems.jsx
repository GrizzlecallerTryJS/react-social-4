import React from "react";

const ProfileInfoItems = (props) => {
  let test = () => {
    return (
      <textarea value={props.profileStatus} id={props.userProfile.userId}>
        test
      </textarea>
    );
  };

  return (
    <div>
      <div>{props.userProfile.fullName}</div>
      <div>{props.userProfile.userId}</div>
      <div>
        <span onDoubleClick={test}>{props.profileStatus}</span>
      </div>
    </div>
  );
};

export default ProfileInfoItems;
