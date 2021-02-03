
import React from 'react';
import { Form, Field } from 'react-final-form';
import './send.css';
import { Textarea } from '../../common/FormsControls/Textarea/Textarea';
import { maxLength, composeValidators } from '../../../utils/validators';
// const Textarea = (props) => {
//   const { input, meta } = props;
//
//   return (
//     <textarea className="dialogs-send__text" {...input}></textarea>
//   )
// }

const FormSendMessage = (props) => {
  return (
    <Form onSubmit={props.sendMessage} render={({ handleSubmit }) => {
      return (
        <form className="dialogs-send__form" onSubmit={ handleSubmit }>
          <Field
            className="dialogs-send__text"
            name="text" validate={composeValidators(maxLength(5))}
            component={Textarea}
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
