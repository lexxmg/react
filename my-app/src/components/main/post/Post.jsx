import s from './post.module.css';

const Post = (props) => {
  //debugger;

  return (
    <div className={s.container}>
      <div className={s.post}>
        <div className="">
          <div className={s.post__ava}>
            <img  className={s.img} src={props.img} alt="аватарка"/>
          </div>

          <span className={s.name}>{props.name}</span>
        </div>

        <p className={s.post__text}>{props.text}</p>
      </div>
    </div>
  )
}

export default Post;
