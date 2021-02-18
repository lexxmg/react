
import { profileAPI } from '../api/api';

const ADD_POST = 'ADD-POST',
      SET_USER_PROFILE = 'SET_USER_PROFILE',
      SET_USER_STATUS = 'SET_USER_STATUS';

export const actionCreatorAddPost = (text) => {
  return {type: ADD_POST, message: text};
}

export const setUsersProfile = (profile) => {
  return {type: SET_USER_PROFILE, profile};
}

export const setUserStatus = (status) => {
  return {type: SET_USER_STATUS, status}
}

export const getProfile = (userId) => {
  return (dispatch) => {
    profileAPI.getProfile(userId).then(data => {
      dispatch( setUsersProfile(data) );
    })
  }
}

export const getUserStatus = (userId) => {
  return (dispatch) => {
    profileAPI.getUserStatus(userId).then(status => {
      dispatch( setUserStatus(status) );
    })
  }
}

export const updateUserStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateUserStatus(status)
      .then(data => {
        if ( data.resultCode === 0 ) {
          dispatch( setUserStatus(status) );
        }
      })
  }
}

const avatar = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkNClHcBngc-qOfx6OQ-rCm6L-xHp-t6R2QA&usqp=CAU';

const initialState = {
  profile: null,
  userStatus: '',
  posts: [
    {name: 'Петя', post: 'werhwgng', avatar: avatar, id: '1'},
    {name: 'Вася', post: 'werhwgng', avatar: '', id: '2'},
    {name: 'Даша', post: 'werhwgng', avatar: avatar, id: '3'}
  ],
  random: ''
}

const profReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FAKE':
      return {...state, random: action.random};
    case ADD_POST:
      const id = (+new Date() + 1).toString(16);
      const obj = {name: 'Вася', avatar: '', post: action.message, id: id};

      return {...state, posts: [...state.posts, obj]};
    case  SET_USER_PROFILE:
      return { ...state, profile: action.profile };
    case SET_USER_STATUS:
      return {...state, userStatus: action.status}
    default:
      return state;
  }
}

export default profReducer;
