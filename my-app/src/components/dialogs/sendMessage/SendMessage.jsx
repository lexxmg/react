
import React from 'react';
import { Form, Field } from 'react-final-form';
import './send.css';

const FormSendMessage = (props) => {
  return (
    <Form onSubmit={props.sendMessage} render={({ handleSubmit }) => {
      return (
        <form className="dialogs-send__form" onSubmit={ handleSubmit }>
          <Field
            className="dialogs-send__text" name="text"
            component="textarea"
            cols="30" wrap="hard"
          />

          <button className="dialogs-send__btn"></button>
        </form>
      )
    }} />
  )
}

const SendMessage = (props) => {
  return (
    <div className="dialogs__send dialogs-send">
      <FormSendMessage {...props}/>
    </div>
  )
}

export default SendMessage;
