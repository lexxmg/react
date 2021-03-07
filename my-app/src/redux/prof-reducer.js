
import { profileAPI } from '../api/api';
import { getAuthUser } from './auth-reducer';

const ADD_POST = 'ADD-POST',
      DELETE_POST = 'DELETE-POST',
      SET_USER_PROFILE = 'SET_USER_PROFILE',
      SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS',
      SET_EDIT_MODE = 'SET_EDIT_MODE',
      SET_USER_STATUS = 'SET_USER_STATUS';

const savePhotoSuccess = (photos) => {
  return {
    type: SAVE_PHOTO_SUCCESS,
    photos
  }
}

export const actionCreatorAddPost = (text) => {
  return {type: ADD_POST, message: text};
}

export const deletePost = (id) => {
  return {
    type: DELETE_POST,
    id
  }
}

export const setEditMode = (editMode) => {
  return {
    type: SET_EDIT_MODE,
    editMode
  }
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

export const savePhoto = (photoFile) => {
  return (dispatch) => {
    profileAPI.savePhoto(photoFile)
      .then(data => {
        if ( data.resultCode === 0 ) {
          dispatch(savePhotoSuccess(data.data.photos));
        }
    })
  }
}

export const saveProfile = (formData) => {
  const profile = {
    aboutMe: formData.aboutMe,
     contacts: {
         facebook: formData.facebook,
         website: formData.website,
         vk: formData.vk,
         twitter: formData.twitter,
         instagram: formData.instagram,
         youtube: formData.youtube,
         github: formData.github,
         mainLink: formData.mainLink
     },
     lookingForAJob: formData.lookingForAJob,
     lookingForAJobDescription: formData.lookingForAJobDescription,
     fullName: formData.fullName
  }

  return (dispatch) => {
    return profileAPI.saveProfile(profile).then(data => {
      if ( data.resultCode === 0 ) {
        dispatch(setEditMode(false));
        //dispatch(getProfile(initialState.profile.userId));
      } else {
        return data.messages;
      }
    })
  }
}

const avatar = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkNClHcBngc-qOfx6OQ-rCm6L-xHp-t6R2QA&usqp=CAU';

const initialState = {
  profile: null,
  profileEditMode: false,
  userStatus: '',
  posts: [
    {name: 'Петя', post: 'werhwgng', avatar: avatar, id: 1},
    {name: 'Вася', post: 'werhwgng', avatar: '', id: 2},
    {name: 'Даша', post: 'werhwgng', avatar: avatar, id: 3}
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
    case DELETE_POST:
      return {...state,
        posts: state.posts.filter(obj => {
          return obj.id !== action.id
        })
      }
    case SAVE_PHOTO_SUCCESS:
      return {...state, profile: {...state.profile, photos: action.photos}}
    case  SET_USER_PROFILE:
      return { ...state, profile: {...state.profile , ...action.profile}};
    case SET_EDIT_MODE:
      return {...state, profileEditMode: action.editMode}
    case SET_USER_STATUS:
      return {...state, userStatus: action.status}
    default:
      return state;
  }
}

export default profReducer;
