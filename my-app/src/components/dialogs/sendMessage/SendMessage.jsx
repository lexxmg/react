
import React from 'react';
import './send.css';
import {
  actionCreatorSendMessage,
  actionCreatorSetValueMessage,
  actionCreatorGetFocusMessege
} from '../../../redux/dialogs-reducer';


const SendMessage = (props) => {
  return (
    <div className="dialogs__send dialogs-send">
      <form className="dialogs-send__form" onSubmit={ sendMessage }>
        <textarea className="dialogs-send__text" name="text"
          cols="30" wrap="hard"
          value={ props.valueMessage }
          onChange={ setValue }
          onFocus={ () => props.dispatch( actionCreatorGetFocusMessege() ) }>
        </textarea>

        <button className="dialogs-send__btn"></button>
      </form>
    </div>
  );

  function sendMessage(e) {
    e.preventDefault();

    const text = e.target.text.value;

    //props.sendMessage(text);
    props.dispatch( actionCreatorSendMessage(text) );
    //props.setValueMessage('');
  }

  function setValue(e) {
    const text = e.target.value;
    //props.setValueMessage(newPostElement.current.value);
    props.dispatch( actionCreatorSetValueMessage(text) );
  }
}

export default SendMessage;
