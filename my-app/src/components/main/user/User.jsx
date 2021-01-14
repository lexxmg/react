
import s from './user.module.css';
import Preload from '../../common/Preloader/Preloader';
import noFoto from '../../../assets/images/images.jpeg';

// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnkXX1msb3FcwUKdveOb4VJ_8dlsezqUlqEQ&usqp=CAU

const User = ({ profile, photos, fullName, aboutMe }) => {
  //const {} = props;
  //debugger;
  if(!profile) {
    return <Preload />
  }

  return (
    <div className={s.user}>
      <div className={s.image}>
        <img src={photos.small ? photos.small : noFoto} alt="дрын" className={s.img}/>
      </div>

      <div className={s.info}>
        <h2 className={s.title}>{fullName}</h2>

        <ul className={`${s.user__list} ${s.list}`}>
          <li className={s.list__item}>
            <span className={s.list__dada}>Обо мне:</span>
            <span className={s.list__text}>{aboutMe}</span>
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
