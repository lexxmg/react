
import React from 'react';
import s from './user.module.css';
import Preload from '../../common/Preloader/Preloader';
import noFoto from '../../../assets/images/images.jpeg';

// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnkXX1msb3FcwUKdveOb4VJ_8dlsezqUlqEQ&usqp=CAU

const User = ({photos, fullName, aboutMe, profile, lookingForAJob, lookingForAJobDescription}) => {
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

          { lookingForAJob &&
              <li className={s.list__item}>
                <span className={s.list__dada}>Ищу работу:</span>
                <span className={s.list__text}>{lookingForAJobDescription}</span>
              </li>
          }

          {
            Object.keys(profile.contacts).map(key => {
              if (!profile.contacts[key]) {
                return (
                  <li className={s.list__item} key={key}>
                    <span className={s.list__dada}>{key}:</span>
                    <span className={s.list__text}>{profile.contacts[key]}</span>
                  </li>
                )
              }
            })
          }
        </ul>
      </div>
    </div>
  )
}

const UserContacts = (props) => {
  return (
    <div className="user-contacta-container">
      <ul className="user-contacta-container__list user-contacta-list">
        {
          Object.keys(props.profile.contacts).map(key => {
            return (
              <li className="user-contacta-list__item" key={key}>{key}</li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default User;
