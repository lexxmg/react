import React from 'react';
import s from './userPost.module.css';


const UserPost = (props) => {
  return (
    <div className={s.post}>
      <h2 className={s.post__title}>My posts</h2>

      <form className={s.post__form} onSubmit={ props.addPost }>
        <textarea name="text" className={s.post__textarea}
          onChange={ props.setValuePost }
          value={ props.textValue }
          onFocus={ props.focus }
          >
        </textarea>

        <button className={s.post__btn}>send</button>
      </form>
    </div>
  );
}

export default UserPost;
