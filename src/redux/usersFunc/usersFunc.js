export const _followFunc = (user, followStatus) => {
  if (user.followStatus === followStatus) {
    user.followStatus = !followStatus;
  }
};

export const _setUsers = (stateCopy, users) => {
  if (stateCopy.users.length === 0) {
    stateCopy.users = users;
  }
};
