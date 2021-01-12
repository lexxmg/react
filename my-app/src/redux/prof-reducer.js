
import { profileAPI } from '../api/api';

const ADD_POST = 'ADD-POST',
      SET_VALUE_POST = 'SET-VALUE-POST',
      GET_FOCUS_POST = 'GET-FOCUS-POST',
      SET_USER_PROFILE = 'SET_USER_PROFILE';

export const actionCreatorAddPost = (text) => {
  return {type: ADD_POST, message: text};
}

export const actionCreatorSetValuePost = (text) => {
  return {type: SET_VALUE_POST, message: text};
}

export const actionCreatorGetFocusPost = () => {
  return {type: GET_FOCUS_POST};
}

export const setUsersProfile = (profile) => {
  return {type: SET_USER_PROFILE, profile};
}

export const getProfile = (userId) => {
  return (dispatch) => {
    profileAPI.getProfile(userId).then(data => {
      dispatch( setUsersProfile(data) );
    })
  }
}

const avatar = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkNClHcBngc-qOfx6OQ-rCm6L-xHp-t6R2QA&usqp=CAU';

const initialState = {
  profile: null,
  posts: [
    {name: 'Петя', post: 'werhwgng', avatar: avatar, id: '1'},
    {name: 'Вася', post: 'werhwgng', avatar: '', id: '2'},
    {name: 'Даша', post: 'werhwgng', avatar: avatar, id: '3'}
  ],
  valuePost: 'Напишите текст'
}

const profReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const id = (+new Date() + 1).toString(16);
      const obj = {name: 'Вася', avatar: '', post: action.message, id: id};

      return {...state, posts: [...state.posts, obj], valuePost: ''};
    case  SET_VALUE_POST:
      return {...state, valuePost: action.message};
    case  GET_FOCUS_POST:
      return {...state, valuePost: ''};
      case  SET_USER_PROFILE:
        return { ...state, profile: action.profile };
    default:
      return state;
  }
}

export default profReducer;
