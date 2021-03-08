
import React from 'react';
import s from './user.module.css';
import './userForm.css';
import Preload from '../../common/Preloader/Preloader';
import noFoto from '../../../assets/images/images.jpeg';
import { Form, Field } from 'react-final-form';

// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnkXX1msb3FcwUKdveOb4VJ_8dlsezqUlqEQ&usqp=CAU

const User = ({
    authId, photos, fullName, aboutMe,
    profile, lookingForAJob, lookingForAJobDescription,
    saveProfile, getEditMode, setEditMode
  }) => {
  //lookingForAJob = true;
  //const [editMode, setEditMode] = useState(false);

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
            <span className={s.list__dada}>Ищу работу:</span>
            <span className={s.list__text}>{lookingForAJob ? 'да' : 'нет'}</span>
          </li>

          { lookingForAJob &&
              <li className={s.list__item}>
                <span className={s.list__dada}>Специальность:</span>
                <span className={s.list__text}>{lookingForAJobDescription}</span>
              </li>
          }

          {
            Object.keys(profile.contacts).map(key => {
              if (profile.contacts[key]) {
                return (
                  <li className={s.list__item} key={key}>
                    <span className={s.list__dada}>{key}:</span>
                    <span className={s.list__text}>
                      <a className=""
                        href={profile.contacts[key]}
                        target="_blanck"
                      >
                        {profile.contacts[key]}
                      </a>
                    </span>
                  </li>
                )
              }
            })
          }
        </ul>

        <div>
          {
            (profile && profile.userId === authId)
            ? <button className="" onClick={() => {setEditMode(true)}}>Правка</button>
            : ''
          }
        </div>

        {
          getEditMode && <UserContactsForm
            setEditMode={setEditMode}
            profile={profile}
            saveProfile={saveProfile}
            />
        }

        {
          getEditMode
            ? document.body.style.overflow = 'hidden'
            : document.body.style.overflow = ''
        }
      </div>
    </div>
  )
}

const UserContactsForm = (props) => {
  const closeEditMode = (event) => {
    //console.log(event.target.className);
    if (event.target.className === 'user-form-container') {
      props.setEditMode(false);
    }
  }

  return (
    <div className="user-form-container" onClick={closeEditMode}>
      <div className="user-form-container__inner">
        <Form
          onSubmit={props.saveProfile}
          initialValues={{
            fullName: props.profile.fullName,
            aboutMe: props.profile.aboutMe,
            lookingForAJob: props.profile.lookingForAJob,
            lookingForAJobDescription: props.profile.lookingForAJobDescription,
            ...props.profile.contacts
          }}
          render={({ handleSubmit, submitError }) => {
            return (
              <form
                className="user-form-container__form user-form-container-form"
                onSubmit={handleSubmit}
              >
                <div className="user-form-container-form__input-container">
                  <label htmlFor="fullName" className="user-form-container-form__label">Имя:</label>

                  <Field
                    className="user-form-container-form__input"
                    id="fullName"
                    name="fullName"
                    type="text"
                    component="input"
                  />
                </div>

                <div className="user-form-container-form__input-container">
                  <label htmlFor="aboutMe" className="user-form-container-form__label">Обомне:</label>

                  <Field
                    className="user-form-container-form__input"
                    id="aboutMe"
                    name="aboutMe"
                    type="text"
                    component="input"
                  />
                </div>

                <div className="user-form-container-form__input-container">
                  <label htmlFor="lookingForAJob"
                    className="user-form-container-form__label">Ищу работу:</label>

                  <Field
                    className="user-form-container-form__checkbox"
                    id="lookingForAJob"
                    name="lookingForAJob"
                    type="checkbox"
                    component="input"
                  />
                </div>

                <div className="user-form-container-form__input-container">
                  <label htmlFor="lookingForAJobDescription" className="user-form-container-form__label">Специальность:</label>

                  <Field
                    className="user-form-container-form__input"
                    id="lookingForAJobDescription"
                    name="lookingForAJobDescription"
                    type="text"
                    component="input"
                  />
                </div>

                <p className="user-form-container-form__text">Контакты:</p>

                {
                  Object.keys(props.profile.contacts).map(key => {
                    return (
                      <div className="user-form-container-form__input-container" key={key}>
                        <label htmlFor={key} className="user-form-container-form__label">{key}:</label>

                        <Field
                          className="user-form-container-form__input"
                          id={key}
                          name={key}
                          type="text"
                          component="input"
                        />
                      </div>
                    )
                  })
                }

                {
                  submitError &&
                  <div className="user-form-container-form__tex-err">{submitError}</div>
                }

                <button className="user-form-container-form__btn">Сохранить</button>
              </form>
            )
          }}
        />

        <button
          className="user-form-container__btn"
          onClick={() => {props.setEditMode(false)}}>закрыть
        </button>
      </div>
    </div>
  )
}

export default User;
