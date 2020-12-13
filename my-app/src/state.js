const avatar = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkNClHcBngc-qOfx6OQ-rCm6L-xHp-t6R2QA&usqp=CAU';

const ADD_POST = 'ADD-POST',
      SET_VALUE_POST = 'SET-VALUE-POST',
      GET_FOCUS_POST = 'GET-FOCUS-POST',
      SEND_MESSAGE = 'SEND-MESSAGE',
      SET_VALUE_MESSAGE = 'SET-VALUE-MESSAGE',
      GET_FOCUS_MESSAGE = 'GET-FOCUS-MESSAGE';

export const actionCreatorAddPost = (text) => {
  return {type: ADD_POST, message: text};
}
export const actionCreatorSetValuePost = (text) => {
  return {type: SET_VALUE_POST, message: text};
}
export const actionCreatorGetFocusPost = () => {
  return {type: GET_FOCUS_POST};
}
export const actionCreatorSendMessage = (text) => {
  return {type: SEND_MESSAGE, message: text};
}
export const actionCreatorSetValueMessage = (text) => {
  return {type: SET_VALUE_MESSAGE, message: text};
}
export const actionCreatorGetFocusMessege = () => {
  return {type: GET_FOCUS_MESSAGE};
}

const store = {
  _state: {
    dialogs: {
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
    },
    prof: {
      posts: [
        {name: 'Петя', post: 'werhwgng', avatar: avatar, id: '1'},
        {name: 'Вася', post: 'werhwgng', avatar: '', id: '2'},
        {name: 'Даша', post: 'werhwgng', avatar: avatar, id: '3'}
      ],
      valuePost: 'Напишите текст'
    }
  },
  _callSubscriber() {
    console.log('State changet');
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {  // { type: 'SEND-MESSAGE', message: 'text' }
    if (action.type === ADD_POST) {
      const id = (+new Date() + 1).toString(16);
      const obj = {name: 'Вася', avatar: '', post: action.message, id: id};

      this._state.prof.posts.push(obj);
      this._state.prof.valuePost = '';

      //console.log(this._state.prof.posts);
      this._callSubscriber();
    } else if (action.type === SET_VALUE_POST) {
      this._state.prof.valuePost = action.message;

      this._callSubscriber();
    } else if (action.type === GET_FOCUS_POST) {
      this._state.prof.valuePost = '';
      console.log('фокус');

      this._callSubscriber();
    } else if (action.type === SEND_MESSAGE) {
      const id = (+new Date() + 1).toString(16);
      const obj = {name: 'Вася', avatar: '', post: action.message, id: id};

      this._state.dialogs.userDialog.push(obj);
      this._state.dialogs.valueMessage = '';
      //console.log(state.dialogs.userDialog);
      this._callSubscriber();
    } else if (action.type === SET_VALUE_MESSAGE) {
      this._state.dialogs.valueMessage = action.message;
      //console.log(state.valueMessage);
      this._callSubscriber();
    } else if (action.type === GET_FOCUS_MESSAGE) {
      this._state.dialogs.valueMessage = '';
      console.log('фокус');

      this._callSubscriber();
    }
  }
}

window.state = store.getState();
export default store;
