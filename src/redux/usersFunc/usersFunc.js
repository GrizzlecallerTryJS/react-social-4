export const _followFunc = (user, followStatus) => {
  if (user.followStatus === followStatus) {
    user.followStatus = !followStatus;
  }
};
