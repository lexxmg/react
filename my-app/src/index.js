import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';
import App from './App';
import store from './state';

const render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={store.getState()}
           sendMessage={store.sendMessage.bind(store)}
           addPost={store.addPost.bind(store)}
           setValueMessage={store.setValueMessage.bind(store)}
           setValuePost={store.setValuePost.bind(store)}
           getFocusMessege={store.getFocusMessege.bind(store)}
           getFocusPost={store.getFocusPost.bind(store)}
           />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

render();

store.subscribe(render);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
