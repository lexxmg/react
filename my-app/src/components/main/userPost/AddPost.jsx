
import React from 'react';
import s from './userPost.module.css';
import { Form, Field } from 'react-final-form';


const UserPost = (props) => {
  return (
    <div className={s.post}>
      <h2 className={s.post__title}>My posts</h2>

      <Form onSubmit={props.addPost} render={({ handleSubmit }) => {
        return (
          <form className={s.post__form} onSubmit={handleSubmit}>
            <Field
              className={s.post__textarea}
              name="text"
              component="textarea"
              />

            <button className={s.post__btn}>send</button>
          </form>
        )
      }}/>
    </div>
  );
}

export default UserPost;
