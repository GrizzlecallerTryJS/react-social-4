export const userDataSelector = (state) => {
  return state.authState.userData;
};
export const isAuthSelector = (state) => {
  return state.authState.isAuth;
};
