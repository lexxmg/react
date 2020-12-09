
const avatar = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkNClHcBngc-qOfx6OQ-rCm6L-xHp-t6R2QA&usqp=CAU';

const store = {
  state: {
    dialogs: {
      userData: [
        {name: 'Вася', avatar: '', id: '1'},
        {name: 'Петя', avatar: avatar, id: '2'},
        {name: 'Саша', avatar: '', id: '3'},
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
    },
    prof: {
      posts: [
        {name: 'Петя', post: 'werhwgng', avatar: avatar, id: '1'},
        {name: 'Вася', post: 'werhwgng', avatar: '', id: '2'},
        {name: 'Даша', post: 'werhwgng', avatar: avatar, id: '3'}
      ]
    },
    valuePost: 'Напишите текст',
    valueMessage: 'Новое сообщение'
  },

  _render() {},

  sendMessage(text) {
    const id = (+new Date() + 1).toString(16);
    const obj = {name: 'Вася', avatar: '', post: text, id: id};

    this.state.dialogs.userDialog.push(obj);
    this.state.valueMessage = '';
    //console.log(state.dialogs.userDialog);
    this._render();
  },

  setValueMessage(text) {
    this.state.valueMessage = text;
    //console.log(state.valueMessage);
    this._render();
  },

  getFocusMessege() {
    this.state.valueMessage = '';
    console.log('фокус');
    this._render();
  },

  addPost(text) {
    const id = (+new Date() + 1).toString(16);
    const obj = {name: 'Вася', avatar: '', post: text, id: id};

    this.state.prof.posts.push(obj);
    this.state.valuePost = '';

    console.log(this.state.prof.posts);
    this._render();
  },

  setValuePost(text) {
    this.state.valuePost = text;

    this._render();
  },

  getFocusPost() {
    this.state.valuePost = '';

    this._render();
  },

  subscribe(observer) {
    this._render = observer;
  }
}

export default store;
