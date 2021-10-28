export const _currentNewPostTextAreaValue = (state, text) => {
  state.tempPostData.message = text;
};

export const _addPostFunc = (state) => {
  if (state.tempPostData.message.length > 0) {
    let postObject = {
      id: state.postData.length + 1,
      message: state.tempPostData.message,
      likesCount: 0,
    };
    state.postData.push(postObject);
    state.tempPostData.message = "";
  }
};
