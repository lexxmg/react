import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const avatar = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkNClHcBngc-qOfx6OQ-rCm6L-xHp-t6R2QA&usqp=CAU';

const posts = [
  {name: 'Петя', post: 'werhwgng', avatar: avatar, id: '1'},
  {name: 'Вася', post: 'werhwgng', avatar: '', id: '2'},
  {name: 'Даша', post: 'werhwgng', avatar: avatar, id: '3'}
]

const userData = [
  {name: 'Вася', avatar: '', id: '1'},
  {name: 'Петя', avatar: '', id: '2'},
  {name: 'Саша', avatar: '', id: '3'},
]

const userDialog = [
  {name: 'Вася', avatar: '', post: 'qwetwerhr', id: '1'},
  {name: 'Петя', avatar: '', post: 'qwetwerhr', id: '2'},
  {name: 'Вася', avatar: '', post: 'qwetwerhr', id: '3'},
  {name: 'Вася', avatar: '', post: 'qwetwerhr', id: '4'},
  {name: 'Петя', avatar: '', post: 'qwetwerhr', id: '5'},
  {name: 'Вася', avatar: '', post: 'qwetwerhr', id: '6'},
  {name: 'Петя', avatar: '', post: 'qwetwerhr', id: '7'}
]

ReactDOM.render(
  <React.StrictMode>
    <App userData={userData} userDialog={userDialog} posts={posts}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
