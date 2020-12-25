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


const avatar = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkNClHcBngc-qOfx6OQ-rCm6L-xHp-t6R2QA&usqp=CAU';

const initialState =  {
  userData: [
    {name: 'Вася', avatar: '', id: '1'},
    {name: 'Петя', avatar: avatar, id: '2'},
    {name: 'Саша', avatar: '', id: '3'}
  ],
  userDialog: [
    {name: 'Вася', avatar: '', post: 'qwetwerhr', id: '1'},
    {name: 'Петя', avatar: '', post: 'qwetwerhr', id: '2'},
    {name: 'Вася', avatar: '', post: 'qwetwerhr', id: '3'},
    {name: 'Вася', avatar: '', post: 'qwetwerhr', id: '4'},
    {name: 'Петя', avatar: '', post: 'qwetwerhr', id: '5'},
    {name: 'Вася', avatar: '', post: 'qwetwerhr', id: '6'},
    {name: 'Петя', avatar: '', post: 'qwetwerhr', id: '7'}
  ],
  valueMessage: 'Новое сообщение'
}

const dialogsReducer =  (state = initialState, action) => {
  const newState = {...state};
  switch (action.type) {
    case SEND_MESSAGE:
      const id = (+new Date() + 1).toString(16);
      const obj = {name: 'Вася', avatar: '', post: action.message, id: id};

      newState.userDialog = [...state.userDialog, obj];
      newState.valueMessage = '';
      return newState ;
    case  SET_VALUE_MESSAGE:
      newState.valueMessage = action.message;
      return newState;
    case GET_FOCUS_MESSAGE:
      newState.valueMessage = '';
      console.log('фокус');
      return newState;
    default:
      return state;
  }
}

export default dialogsReducer;
