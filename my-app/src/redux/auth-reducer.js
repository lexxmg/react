
import { authAPI, profileAPI, securityAPI } from '../api/api';
//import { FORM_ERROR } from 'final-form';


const SET_USER_DATA = 'SET_USER_DATA',
      SET_AUTH_PROFILE = 'SET_AUTH_PROFILE',
      SET_CAPTCHA = 'SET_CAPTCHA';
      // USER_LOGIN = 'USER_LOGIN',
      // USER_LOGOUT = 'USER_LOGOUT';

export const setUserData = (id, email, login, isAuth) => {
  return {
    type: SET_USER_DATA,
    data: {
      id,
      email,
      login,
      isAuth
    }
  }
}

export const setAuthProfile = (profile, isProfile) => {
  return {type: SET_AUTH_PROFILE, profile, isProfile}
}

const getCaptchaUrl = () => {
  return dispatch => {
    securityAPI.getCaptcha().then(data => {
      dispatch(setCaptcha(data.url))
    });
  }
}

const setCaptcha = (url) => {
  return {
    type: SET_CAPTCHA,
    url
  }
}

export const getAuthUser = () => {
  return (dispatch) => {
    return authAPI.getAuthUser()
    .then(data => {
      if (data.resultCode === 0) {
        const {id, email, login} = data.data;
        dispatch(setUserData(id, email, login, true));
        profileAPI.getProfile(id).then(data => {
          dispatch(setAuthProfile(data, true));
        })
      }
    })
  }
}

export const getUserLogout = () => {
  return (dispatch) => {
    authAPI.userLogout().then(data => {
      if (data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false));
        dispatch(setAuthProfile(null, false))
      }
    })
  }
}

export const getUserLogin = (email, password, rememberMe, captcha) => {
  return (dispatch) => {
    return authAPI.userLogin(email, password, rememberMe, captcha).then(data => {
      //console.log(data);
      if (data.resultCode === 0) {
        //dispatch(setUserLogin(data.data.userId));
        dispatch(getAuthUser());
        dispatch(setCaptcha(null));
      } else {
        if (data.resultCode === 10) {
          //console.log(data.messages);
          dispatch(getCaptchaUrl());
        }

        return data.messages;
        //dispatch(setServerErrors(data.messages));
      }
    })
  }
}

const initialState = {
  authProfile: null,
  profile: false,
  id: null,
  email: null,
  login: null,
  isAuth: false,
  errors: null,
  captcha: null
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {...state, ...action.data};
    case SET_AUTH_PROFILE:
      return {...state, authProfile: {...action.profile}, profile: action.isProfile, errors: null};
    case SET_CAPTCHA:
      return {...state, captcha: action.url}
    // case USER_LOGIN:
    //   return {...state, isAuth: true, id: action.iserId}
    // case USER_LOGOUT:
    //   return {...state, isAuth: false}
    default:
      return state;
  }
}

export default authReducer;
