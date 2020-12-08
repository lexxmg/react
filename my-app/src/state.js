'use strict';
import render from './render';

const avatar = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkNClHcBngc-qOfx6OQ-rCm6L-xHp-t6R2QA&usqp=CAU';

const state = {
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
  valueMessage: ''
}

export const sendMessage = (text) => {
  const id = (+new Date() + 1).toString(16);
  const obj = {name: 'Вася', avatar: '', post: text, id: id};

  state.dialogs.userDialog.push(obj);
  state.valueMessage = '';
  //console.log(state.dialogs.userDialog);
  render(state);
}

export const addPost = (text) => {
  const id = (+new Date() + 1).toString(16);
  const obj = {name: 'Вася', avatar: '', post: text, id: id};

  state.prof.posts.push(obj);
  state.valuePost = '';

  console.log(state.prof.posts);
  render(state);
}

export const setValueMessage = (text) => {
  state.valueMessage = text;
  console.log(state.valueMessage);
  render(state);
}

export const setValuePost = text => {
  state.valuePost = text;

  render(state);
}

export default state;
