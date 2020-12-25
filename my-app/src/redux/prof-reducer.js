const ADD_POST = 'ADD-POST',
      SET_VALUE_POST = 'SET-VALUE-POST',
      GET_FOCUS_POST = 'GET-FOCUS-POST';

export const actionCreatorAddPost = (text) => {
  return {type: ADD_POST, message: text};
}

export const actionCreatorSetValuePost = (text) => {
  return {type: SET_VALUE_POST, message: text};
}

export const actionCreatorGetFocusPost = () => {
  return {type: GET_FOCUS_POST};
}

const avatar = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkNClHcBngc-qOfx6OQ-rCm6L-xHp-t6R2QA&usqp=CAU';

const initialState = {
  posts: [
    {name: 'Петя', post: 'werhwgng', avatar: avatar, id: '1'},
    {name: 'Вася', post: 'werhwgng', avatar: '', id: '2'},
    {name: 'Даша', post: 'werhwgng', avatar: avatar, id: '3'}
  ],
  valuePost: 'Напишите текст'
}

const profReducer = (state = initialState, action) => {
  const newState = {...state};
  switch (action.type) {
    case ADD_POST:
      const id = (+new Date() + 1).toString(16);
      const obj = {name: 'Вася', avatar: '', post: action.message, id: id};

      newState.posts = [...state.posts, obj];
      newState.valuePost = '';
      return newState;
    case  SET_VALUE_POST:
      newState.valuePost = action.message;
      return newState;
    case  GET_FOCUS_POST:
      newState.valuePost = '';
      console.log('фокус');
      return newState;
    default:
      return state;
  }
}

export default profReducer;
