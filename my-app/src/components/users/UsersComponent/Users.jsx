import React from 'react';
import './users.css';

const Users = ({
                avatar,
                follow,
                name,
                lastName,
                status,
                city,
                country,
                Follow,
                UnFollow,
                id
              }) => {
  return (
    <div className="user-card">
      <div className="user-card__img-container">
        <div className="user-card__ava">
          <img className="user-card__img" src={avatar} alt="аватарка"/>
        </div>

        {
          follow ?
            <button
              className="user-card__btn"
              onClick={() => UnFollow(id)}>Подписаться
            </button> :
            <button 
              className="user-card__btn"
              onClick={() => Follow(id)}>Отписаться
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
