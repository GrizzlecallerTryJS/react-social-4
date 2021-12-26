export const _setAuth = (stateCopy, userAuth) => {
  stateCopy.userData = { ...userAuth };
  if (userAuth.isAuth === undefined) {
    stateCopy.isAuth = true;
  } else {
    stateCopy.isAuth = userAuth.isAuth;
  }
};
