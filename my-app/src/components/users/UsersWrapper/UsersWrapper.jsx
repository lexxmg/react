
import React from 'react';
import './usersWrapper.css';
import Users from '../UsersComponent/Users';
import Preloader from '../../common/Preloader/Preloader';
import Paginator from '../../common/Paginator/Paginator';

const UserWrrapper = (props) => {
  return (
    <div className="users-wrapper">

      {props.preload ? <Preloader /> : null}

      <h2 className="users-wrapper__tirle">Пользователи</h2>

      <Paginator {...props}/>

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
                followingInProgress={props.followingInProgress}
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
