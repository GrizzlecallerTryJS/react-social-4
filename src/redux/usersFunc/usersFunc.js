export const _followFunc = (user) => {
  /*if (user.followed) {
    axios
      .delete(
        `https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
        {
          withCredentials: true,
          headers: { "API-KEY": "ff303e2a-33e9-4b2c-90a3-a8b22ff8b29b" },
        }
      )
      .then((response) => {
        if (response.data.resultCode === 0) {
          user.followed = false;
        }
      });
  } else {
    axios
      .post(
        `https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
        {},
        {
          withCredentials: true,
          headers: { "API-KEY": "ff303e2a-33e9-4b2c-90a3-a8b22ff8b29b" },
        }
      )
      .then((response) => {
        debugger;
        if (response.data.resultCode === 0) {
          user.followed = true;
        }
      });
  }*/
};

export const _otherFollowFunc = (user) => {
  user.followed = !user.followed;
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
