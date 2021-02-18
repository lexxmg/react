
export const gerUserData = (state) => {
  // const id = +new Date();
  // setInterval(() => {
  //   console.log([...state.dialogs.userData, {name: 'Саша', avatar: '', id: id}]);
  //   return [...state.dialogs.userData, {name: 'Саша', avatar: '', id: id}];
  // }, 5000);
  return state.dialogs.userData;
}

export const gerUserDialogs = (state) => {
  return state.dialogs.userDialog;
}
