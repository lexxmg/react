
import React from 'react';
import { Form, Field } from 'react-final-form';
import './send.css';

const Textarea = (props) => {
  const { input, meta } = props;

  return (
    <textarea className="dialogs-send__text" {...input}></textarea>
  )
}

const FormSendMessage = (props) => {
  return (
    <Form onSubmit={props.sendMessage} render={({ handleSubmit }) => {
      return (
        <form className="dialogs-send__form" onSubmit={ handleSubmit }>
          <Field name="text" component={Textarea} />

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
