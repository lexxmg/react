
import React from 'react';
import './send.css';

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
          onFocus={ () => props.getFocusMessege() }>
        </textarea>

        <button className="dialogs-send__btn"></button>
      </form>
    </div>
  );

  function sendMessage(e) {
    e.preventDefault();

    const text = newPostElement.current.value;

    props.sendMessage(text);
    //props.setValueMessage('');
  }

  function setValue() {
    props.setValueMessage(newPostElement.current.value);
  }
}

export default SendMessage;
