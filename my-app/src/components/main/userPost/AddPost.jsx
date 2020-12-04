import s from './userPost.module.css';

const UserPost = () => {
  return (
    <div className={s.post}>
      <h2 className={s.post__title}>My posts</h2>

      <form className={s.post__form}>
        <textarea name="text" className={s.post__textarea}></textarea>

        <button className={s.post__btn}>send</button>
      </form>
    </div>
  )
}

export default UserPost;
