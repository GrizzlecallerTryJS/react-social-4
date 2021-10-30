export const _currentNewMessageTextAreaValue = (state, text, textAreaId) => {
  /*if (text !== undefined || textAreaId !== null) */ {
    state.tempMessageData.message = text;
    state.tempMessageData.textAreaId = textAreaId;
  }
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
