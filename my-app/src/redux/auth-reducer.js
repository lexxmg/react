
import { authAPI, profileAPI } from '../api/api';

const SET_USER_DATA = 'SET_USER_DATA',
      SET_AUTH_PROFILE = 'SET_AUTH_PROFILE',
      USER_LOGOUT = 'USER_LOGOUT';

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

const setLogout = () => {
  return {type: USER_LOGOUT}
}

export const setAuthProfile = (profile) => {
  return {type: SET_AUTH_PROFILE, profile}
}

export const getAuthUser = () => {
  return (dispatch) => {
    authAPI.getAuthUser()
    .then(data => {
      if (data.resultCode === 0) {
        const {id, email, login} = data.data;
        dispatch(setUserData(id, email, login));
        return id;
      }
    })
    .then(id => {
      return profileAPI.getProfile(id);
    })
    .then(data => {
      dispatch(setAuthProfile(data));
    })
    // .then(id => {
    //   profileAPI.getProfile(id).then(data => {
    //     dispatch(setAuthProfile(data));
    //   })
    // })
  }
}

export const userLogout = () => (dispatch) => {
  authAPI.userLogout().then(data => {
    if (data.resultCode === 0) {
      dispatch( setLogout() );
    }
  })
}

const initialState = {
  authProfile: {},
  profile: false,
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
      return {...state, authProfile: {...action.profile}, profile: true};
    case USER_LOGOUT:
        return {...state, isAuth: false}
    default:
      return state;
  }
}

export default authReducer;
