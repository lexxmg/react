
import { authAPI, profileAPI } from '../api/api';
//import { FORM_ERROR } from 'final-form';


const SET_USER_DATA = 'SET_USER_DATA',
      SET_AUTH_PROFILE = 'SET_AUTH_PROFILE',
      SET_SERVER_ERRORS = 'SET_SERVER_ERRORS';
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

// export const setUserLogin = () => {
//   return {type: USER_LOGIN}
// }

// export const setUserLogout = (userId) => {
//   return {type: USER_LOGOUT, userId}
// }

export const getAuthUser = () => {
  return (dispatch) => {
    authAPI.getAuthUser()
    .then(data => {
      if (data.resultCode === 0) {
        const {id, email, login} = data.data;
        dispatch(setUserData(id, email, login, true));
        return id;
      }
    })
    .then(id => {
      return profileAPI.getProfile(id);
    })
    .then(data => {
      dispatch(setAuthProfile(data, true));
    })
    // .then(id => {
    //   profileAPI.getProfile(id).then(data => {
    //     dispatch(setAuthProfile(data));
    //   })
    // })
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

const setServerErrors = (error) => {
  return {
    type: SET_SERVER_ERRORS,
    error
  }
}

export const getUserLogin = (email, password, rememberMe, captcha) => {
  return (dispatch) => {
    authAPI.userLogin(email, password, rememberMe, captcha).then(data => {
      console.log(data);
      if (data.resultCode === 0) {
        //dispatch(setUserLogin(data.data.userId));
        dispatch(getAuthUser());
      } else {
        console.log(data.messages);
        dispatch(setServerErrors(data.messages));
      }
    })
  }
}

const initialState = {
  authProfile: {},
  profile: false,
  id: null,
  email: null,
  login: null,
  isAuth: false,
  errors: null
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {...state, ...action.data};
    case SET_AUTH_PROFILE:
      return {...state, authProfile: {...action.profile}, profile: action.isProfile, errors: null};
    case SET_SERVER_ERRORS:
      return {...state, errors: [...action.error]};
    // case USER_LOGIN:
    //   return {...state, isAuth: true, id: action.iserId}
    // case USER_LOGOUT:
    //   return {...state, isAuth: false}
    default:
      return state;
  }
}

export default authReducer;
