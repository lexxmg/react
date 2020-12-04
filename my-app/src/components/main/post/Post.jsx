import s from './post.module.css';

const Post = () => {
  return (
    <div className={s.container}>
      <div className={s.post}>
        <div className={s.post__ava}></div>
        <p className={s.post__text}>какой то пост</p>
      </div>
    </div>
  )
}

export default Post;
