export const _followFunc = (user, followed) => {
  if (user.followed === followed) {
    user.followed = !followed;
  }
};

export const _setUsers = (stateCopy, users) => {
  if (users !== null && users !== undefined) {
    stateCopy.users = users;
  }
};

export const _setTotalCount = (stateCopy, totalCount) => {
  debugger;
  if (totalCount !== null && totalCount !== undefined) {
    stateCopy.totalCount = totalCount;
  }
};
