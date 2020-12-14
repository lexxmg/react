const SEND_MESSAGE = 'SEND-MESSAGE',
      SET_VALUE_MESSAGE = 'SET-VALUE-MESSAGE',
      GET_FOCUS_MESSAGE = 'GET-FOCUS-MESSAGE';


export const actionCreatorSendMessage = (text) => {
  return {type: SEND_MESSAGE, message: text};
}

export const actionCreatorSetValueMessage = (text) => {
  return {type: SET_VALUE_MESSAGE, message: text};
}

export const actionCreatorGetFocusMessege = () => {
  return {type: GET_FOCUS_MESSAGE};
}

const dialogsReducer =  (state, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      const id = (+new Date() + 1).toString(16);
      const obj = {name: 'Вася', avatar: '', post: action.message, id: id};

      state.userDialog.push(obj);
      state.valueMessage = '';
      return state;
    case  SET_VALUE_MESSAGE:
      state.valueMessage = action.message;
      return state;
    case GET_FOCUS_MESSAGE:
      state.valueMessage = '';
      console.log('фокус');
      return state;
    default:
      return state;
  }
}

export default dialogsReducer;
