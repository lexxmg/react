
import React from 'react';
import './send.css';
import {
  actionCreatorSendMessage,
  actionCreatorSetValueMessage,
  actionCreatorGetFocusMessege
} from '../../../state';

const newPostElement = React.createRef();

const SendMessage = (props) => {
  return (
    <div className="dialogs__send dialogs-send">
      <form className="dialogs-send__form" onSubmit={ event => sendMessage(event) }>
        <textarea className="dialogs-send__text"
          cols="30" wrap="hard"
          value={ props.valueMessage }
          ref={ newPostElement }
          onChange={ setValue }
          onFocus={ () => props.dispatch( actionCreatorGetFocusMessege() ) }>
        </textarea>

        <button className="dialogs-send__btn"></button>
      </form>
    </div>
  );

  function sendMessage(e) {
    e.preventDefault();

    const text = newPostElement.current.value;

    //props.sendMessage(text);
    props.dispatch( actionCreatorSendMessage(text) );
    //props.setValueMessage('');
  }

  function setValue() {
    const text = newPostElement.current.value;
    //props.setValueMessage(newPostElement.current.value);
    props.dispatch( actionCreatorSetValueMessage(text) );
  }
}

export default SendMessage;
