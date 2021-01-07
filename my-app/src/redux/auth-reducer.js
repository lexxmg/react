
const SET_USER_DATA = 'SET_USER_DATA',
      SET_AUTH_PROFILE = 'SET_AUTH_PROFILE';

export const setUserData = (id, email, login) => {
  return {
    type: SET_USER_DATA,
    data: {
      id,
      email,
      login
    }
  }
}

export const setAuthProfile = (profile) => {
  return {type: SET_AUTH_PROFILE, profile}
}

const initialState = {
  authProfile: {},
  id: null,
  email: null,
  login: null,
  isAuth: false
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {...state, ...action.data, isAuth: true};
    case SET_AUTH_PROFILE:
      return {...state, authProfile: {...action.profile}};
    default:
      return state;
  }
}

export default authReducer;
