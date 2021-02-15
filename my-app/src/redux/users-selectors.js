
export const getUsers = (state) => {
  return state.users.users;
}

export const getUsersCount = (state) => {
  return state.users.userCount;
}

export const getUsersAllCount = (state) => {
  return state.users.usersAllCount;
}

export const getCurrentPage = (state) => {
  return state.users.currentPage;
}

export const getStartPage = (state) => {
  return state.users.startPage;
}

export const getStatePreload = (state) => {
  return state.users.preload;
}

export const getFollowingInProgress = (state) => {
  return state.users.followingInProgress;
}
