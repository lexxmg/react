import s from './user.module.css';

const User = () => {
  return (
    <div className={s.user}>
      <div className={s.image}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnkXX1msb3FcwUKdveOb4VJ_8dlsezqUlqEQ&usqp=CAU" alt="дрын" className={s.img}/>
      </div>

      <div className={s.info}>
        <h2 className={s.title}>Дрын Дрыныч</h2>

        <ul className={`${s.user__list} ${s.list}`}>
          <li className={s.list__item}>
            <span className={s.list__dada}>Date of brith:</span>
            <span className={s.list__text}>7 feb</span>
          </li>
          <li className={s.list__item}>
            <span className={s.list__dada}>City:</span>
            <span className={s.list__text}>Moscow</span>
          </li>
          <li className={s.list__item}>
            <span className={s.list__dada}>Ed:</span>
            <span className={s.list__text}>333</span>
          </li>
          <li className={s.list__item}>
            <span className={s.list__dada}>Web:</span>
            <span className={s.list__text}>www</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default User;
