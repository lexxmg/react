
import React from 'react';
import './send.css';


const SendMessage = (props) => {
  return (
    <div className="dialogs__send dialogs-send">
      <form className="dialogs-send__form" onSubmit={ props.sendMessage }>
        <textarea className="dialogs-send__text" name="text"
          cols="30" wrap="hard"
          value={ props.valueMessage }
          onChange={ props.setValue }
          onFocus={ props.focus }>
        </textarea>

        <button className="dialogs-send__btn"></button>
      </form>
    </div>
  );
}

export default SendMessage;
