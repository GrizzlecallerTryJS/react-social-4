export const _setAuth = (stateCopy, userAuth) => {
  stateCopy.userData = { ...userAuth };
  stateCopy.isAuth = true;
};
