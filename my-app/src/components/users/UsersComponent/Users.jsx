
import React from 'react';
import { NavLink } from 'react-router-dom';
import noFoto from '../../../assets/images/images.jpeg';
import './users.css';

const Users = (props) => {
  const  { photos, followed, name, lastName,
          status, city, country, follow,
          unFollow, id, followingInProgress, } = props;

  return (
    <div className="user-card">
      <div className="user-card__img-container">
        <div className="user-card__ava">
          <NavLink to={'/prof/' + props.id}>
            <img className="user-card__img" src={photos.small ? photos.small : noFoto} alt="аватарка"/>
          </NavLink>
        </div>

        {
          followed ?
            <button
              disabled={followingInProgress.some(userId => userId === id)}
              className="user-card__btn"
              onClick={() => { unFollow(id) }}>Отписаться
            </button> :

            <button
              className="user-card__btn"
              disabled={followingInProgress.some(userId => userId === id)}
              onClick={() => { follow(id) }}>Подписаться
            </button>
        }
      </div>

      <div className="user-card__info">
        <div className="user-card__user-info">
          <div className="user-card__user">
            <span className="user-card__user-name">{name}</span>
            <span className="user-card__user-last-name">{lastName}</span>
          </div>

          <div className="user-card__location">
            <span className="user-card__country">{city}</span>
            <span className="user-card__sity">{country}</span>
          </div>
        </div>

        <p className="user-card__status">{status}</p>
      </div>
    </div>
  )
}

export default Users;
