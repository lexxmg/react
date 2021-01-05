
import React from 'react';
import './usersWrapper.css';
import Users from '../UsersComponent/Users';
import Preloader from '../../common/Preloader/Preloader';

const UserWrrapper = (props) => {

  let pages = [];

  for (let i = props.startPage; i <= props.userCount + props.startPage; i++) {
    pages.push(i);
  }

  const firstPage = (currentPage) => {
    if (currentPage - props.userCount < 0) {
      return currentPage;
    } else {
      return currentPage - props.userCount;
    }
  }

  return (
    <div className="users-wrapper">

      {props.preload ? <Preloader /> : null}

      <h2 className="users-wrapper__tirle">Пользователи</h2>

      <ul className="users-wrapper__list wrapper-list">

        <li
          onClick={() => props.getUsers(firstPage(props.startPage))}
          className={props.currentPage === 1 ?
            "wrapper-list__item wrapper-list__item--acive" :
            "wrapper-list__item"}
        >{(props.startPage - props.userCount < 1) ? '' : props.startPage - props.userCount}
        </li>

        <span>...</span>

        {
          pages.map(pages => {
            return (
              <li
                onClick={() => props.getUsers(pages)}
                key={pages}
                className={props.currentPage === pages ?
                  "wrapper-list__item wrapper-list__item--acive" :
                  "wrapper-list__item"}
              >{pages}</li>
            )
          })
        }
      </ul>

      <div className="users-wrapper__content">
        {
          props.users.map(user => {
            //console.log('map');
            return (
              <Users
                key={user.id}
                photos={user.photos}
                followed={user.followed}
                name={user.name}
                lastName={'user.lastName'}
                status={user.status}
                city={'user.location.city'}
                country={'user.location.country'}
                id={user.id}
                follow={props.follow}
                unFollow={props.unFollow}
              />
            )
          })
        }
      </div>
    </div>
  )
}


export default UserWrrapper;
