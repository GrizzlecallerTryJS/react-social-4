export const userProfileSelector = (state) => {
  return state.profilePage.profileData;
};
export const defaultIdSelector = (state) => {
  return state.profilePage.defaultId;
};
export const userIdSelector = (state) => {
  return state.profilePage.userId;
};
export const profileStatusSelector = (state) => {
  return state.profilePage.profileStatus;
};
