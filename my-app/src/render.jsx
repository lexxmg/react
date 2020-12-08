import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';
import App from './App';
import { sendMessage, addPost, setValueMessage, setValuePost } from './state';

const render = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state}
           sendMessage={sendMessage}
           addPost={addPost}
           setValueMessage={setValueMessage}
           setValuePost={setValuePost}
           />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

export default render;
