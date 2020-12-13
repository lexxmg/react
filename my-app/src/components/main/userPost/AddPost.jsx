import React from 'react';
import s from './userPost.module.css';
import {
        actionCreatorAddPost,
        actionCreatorSetValuePost,
        actionCreatorGetFocusPost
      } from '../../../state';

const profPost = React.createRef();

const UserPost = (props) => {
  return (
    <div className={s.post}>
      <h2 className={s.post__title}>My posts</h2>

      <form className={s.post__form} onSubmit={ (event) => addPost(event) }>
        <textarea name="text" className={s.post__textarea}
          ref={ profPost }
          onChange={ setValuePost }
          value={ props.prof.valuePost }
          onFocus={ () => props.dispatch(actionCreatorGetFocusPost()) }
          >
        </textarea>

        <button className={s.post__btn}>send</button>
      </form>
    </div>
  );

  function addPost(event) {
    event.preventDefault();

    const text = profPost.current.value;

    //props.addPost(text);
    props.dispatch(actionCreatorAddPost(text));

    //profPost.current.value = '';
  }

  function setValuePost() {
    const text = profPost.current.value;
    //console.log(text);
    //props.setValuePost(text);
    props.dispatch(actionCreatorSetValuePost(text));
  }
}

export default UserPost;
