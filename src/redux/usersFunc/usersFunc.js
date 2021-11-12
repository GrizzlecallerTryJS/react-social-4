export const _followFunc = (user, followed) => {
  if (user.followed === followed) {
    user.followed = !followed;
  }
};

export const _setUsers = (stateCopy, users) => {
  if (users !== null && users !== undefined) {
    stateCopy.users = users;
  }
};

export const _setTotalCount = (stateCopy, totalCount) => {
  if (totalCount !== null && totalCount !== undefined) {
    stateCopy.totalCount = totalCount;
  }
  stateCopy.pagesCount = Math.ceil(totalCount / stateCopy.usersOnPageCount);
};

export const _setCurrentPage = (stateCopy, currentPage) => {
  if (currentPage) {
    stateCopy.currentPage = currentPage;
  }
};

export const _setIsFetching = (stateCopy, fetchingStatus) => {
  stateCopy.isFetching = fetchingStatus;
};
