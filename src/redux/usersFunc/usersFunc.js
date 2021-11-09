export const _followFunc = (user, followed) => {
  if (user.followed === followed) {
    user.followed = !followed;
  }
};

export const _setUsers = (stateCopy, users) => {
  /*  if (stateCopy.users.length === 0) {

  }*/
  stateCopy.users = users;
};
