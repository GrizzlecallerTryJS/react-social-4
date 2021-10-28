export const _currentNewMessageTextAreaValue = (state, text) => {
  state.tempMessageData.message = text;
};

export const _addMessageFunc = (state, dialogId) => {
  if (state.tempMessageData.message.length > 0) {
    state.dialogsData.map((dialog) => {
      if (dialog.id === dialogId) {
        let postObject = {
          id: dialog.messagesData.length + 1,
          message: state.tempMessageData.message,
        };
        dialog.messagesData.push(postObject);
      }
    });
    state.tempMessageData.message = "";
  }
};
