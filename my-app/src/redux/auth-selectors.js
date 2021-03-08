
export const getUserId = (state) => {
  return state.autch.id;
}

export const getIsAuthState = (state) => {
  return state.autch.isAuth;
}

export const getCaptcha = (state) => {
  return state.autch.captcha;
}
