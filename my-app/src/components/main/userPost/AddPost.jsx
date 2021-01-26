
import React from 'react';
import s from './userPost.module.css';
import { Form, Field } from 'react-final-form';
import { maxLength, required } from '../../../utils/validators';


const max = maxLength(10);

const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined)

const Textarea = (props) => {
  const { input, meta } = props;

  return (
    <div>
      <textarea className={s.post__textarea} {...input}></textarea>
      {meta.touched && meta.error && <span>{meta.error}</span>}
    </div>
  )
}

const UserPost = (props) => {
  return (
    <div className={s.post}>
      <h2 className={s.post__title}>My posts</h2>

      <Form onSubmit={props.addPost} render={(props) => {
        //console.log(props);
        return (
          <form className={s.post__form} onSubmit={props.handleSubmit}>
            <Field name="text" validate={composeValidators(max, required)} component={Textarea} />

            <button className={s.post__btn} disabled={props.pristine}>send</button>
          </form>
        )
      }}/>
    </div>
  );
}

export default UserPost;
