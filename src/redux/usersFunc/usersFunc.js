export const _followFunc = (user, followed) => {
  debugger;
  if (user.followed === followed) {
    user.followed = !followed;
  }
};

export const _setUsers = (stateCopy, users) => {
  /*  if (stateCopy.users.length === 0) {

  }*/
  debugger;
  stateCopy.users = users;
};
