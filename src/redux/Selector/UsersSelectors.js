export const usersSelector = (state) => {
  return state.usersState.users;
};
export const totalCountSelector = (state) => {
  return state.usersState.totalCount;
};
export const usersOnPageCountSelector = (state) => {
  return state.usersState.usersOnPageCount;
};
export const pagesCountSelector = (state) => {
  return state.usersState.pagesCount;
};
export const currentPageSelector = (state) => {
  return state.usersState.currentPage;
};
export const isFetchingSelector = (state) => {
  return state.usersState.isFetching;
};
export const defaultPageSelector = (state) => {
  return state.usersState.defaultPage;
};
export const followIsFetchingSelector = (state) => {
  return state.usersState.followIsFetching;
};
