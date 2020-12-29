import React from 'react';
import './usersWrapper.css';
import Users from '../UsersComponent/Users';

const UserWrrapper = (props) => {
  return (
    <div className="users-wrapper">
      <h2 className="users-wrapper__tirle">Пользователи</h2>

      <div className="users-wrapper__content">
        {
          props.users.map(user => {
            return (
              <Users
                key={user.id}
                avatar={user.avatar}
                follow={user.follow}
                name={user.name}
                lastName={user.lastName}
                status={user.status}
                city={user.location.city}
                country={user.location.country}
                id={user.id}
                Follow={props.Follow}
                UnFollow={props.UnFollow}
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default UserWrrapper;
