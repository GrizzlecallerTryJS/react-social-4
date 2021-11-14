export const _setAuth = (stateCopy, userAuth) => {
  stateCopy.userData = { ...userAuth };
};
