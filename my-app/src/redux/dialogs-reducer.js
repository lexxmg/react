
const SEND_MESSAGE = 'SEND-MESSAGE';

export const sendMessage = (text) => {
  return {type: SEND_MESSAGE, message: text};
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
  ]
}

const dialogsReducer =  (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      const id = (+new Date() + 1).toString(16);
      const obj = {name: 'Вася', avatar: '', post: action.message, id: id};

      return {...state, userDialog: [...state.userDialog, obj]};
    default:
      return state;
  }
}

export default dialogsReducer;
