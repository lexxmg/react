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

const profReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      const id = (+new Date() + 1).toString(16);
      const obj = {name: 'Вася', avatar: '', post: action.message, id: id};

      state.posts.push(obj);
      state.valuePost = '';
      return state;
    case  SET_VALUE_POST:
      state.valuePost = action.message;
      return state;
    case  GET_FOCUS_POST:
      state.valuePost = '';
      console.log('фокус');
      return state;
    default:
      return state;
  }
}

export default profReducer;
