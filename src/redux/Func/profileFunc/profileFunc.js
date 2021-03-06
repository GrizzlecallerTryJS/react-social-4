export const _currentNewPostTextAreaValue = (stateCopy, text) => {
  stateCopy.tempPostData.message = text;
};

export const _addPostFunc = (stateCopy) => {
  if (stateCopy.tempPostData.message.length > 0) {
    let postObject = {
      id: stateCopy.postData.length + 1,
      message: stateCopy.tempPostData.message,
      likesCount: 0,
    };
    stateCopy.postData = [...stateCopy.postData, postObject];
    stateCopy.tempPostData.message = "";
  }
};

export const _setUserProfile = (stateCopy, userProfile) => {
  if (userProfile) {
    stateCopy.profileData = {
      ...userProfile,
      contacts: { ...userProfile.contacts },
      photos: { ...userProfile.photos },
    };
  }
};

export const _setUserId = (stateCopy, userId) => {
  if (userId) {
    stateCopy.userId = userId;
  }
};

export const _setUserStatus = (stateCopy, userId, status) => {
  if (userId && status) {
    stateCopy.profileStatus = status;
  }
};
