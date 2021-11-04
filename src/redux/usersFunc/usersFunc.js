export const _followFunc = (stateCopy, userId, followStatus) => {
  debugger;
  stateCopy.userData.map((user) => {
    if (user.id === userId && user.followStatus === followStatus) {
      user.followStatus = !followStatus;
    }
  });
};
