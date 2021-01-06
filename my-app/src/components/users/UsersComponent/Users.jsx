
import React from 'react';
import { NavLink } from 'react-router-dom';
import noFoto from '../../../assets/images/images.jpeg';
import './users.css';
import * as axios from 'axios';

const Users = (props) => {
  const  { photos, followed, name, lastName,
          status, city, country, follow,
          unFollow, id } = props;

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
              className="user-card__btn"
              onClick={() => {
                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`,
                  {
                    withCredentials: true,
                    headers: {"API-KEY": "bc973d19-d75d-4ead-a819-8d63c27b31bc"}
                  }
                ).then( (res) => {
                    if (res.data.resultCode === 0) {
                      unFollow(id);
                    }
                  });
                }
              }>Отписаться
            </button> :

            <button
              className="user-card__btn"
              onClick={() => {
                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {},
                  {
                    withCredentials: true,
                    headers: {"API-KEY": "bc973d19-d75d-4ead-a819-8d63c27b31bc"}
                  }
                ).then( (res) => {
                    if (res.data.resultCode === 0) {
                      follow(id);
                    }
                  });
              }
              }>Подписаться
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
