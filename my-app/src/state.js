const avatar = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkNClHcBngc-qOfx6OQ-rCm6L-xHp-t6R2QA&usqp=CAU';

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
  sendMessage(text) {
    const id = (+new Date() + 1).toString(16);
    const obj = {name: 'Вася', avatar: '', post: text, id: id};

    this._state.dialogs.userDialog.push(obj);
    this._state.dialogs.valueMessage = '';
    //console.log(state.dialogs.userDialog);
    this._callSubscriber();
  },
  addPost(text) {
    const id = (+new Date() + 1).toString(16);
    const obj = {name: 'Вася', avatar: '', post: text, id: id};

    this._state.prof.posts.push(obj);
    this._state.prof.valuePost = '';

    //console.log(this._state.prof.posts);
    this._callSubscriber();
  },
  setValueMessage(text) {
    this._state.dialogs.valueMessage = text;
    //console.log(state.valueMessage);
    this._callSubscriber();
  },
  getFocusMessege() {
    this._state.dialogs.valueMessage = '';
    console.log('фокус');

    this._callSubscriber();
  },
  setValuePost(text) {
    this._state.prof.valuePost = text;

    this._callSubscriber();
  },
  getFocusPost() {
    this._state.prof.valuePost = '';
    console.log('фокус');

    this._callSubscriber();
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  }
}

window.state = store.getState();
export default store;
