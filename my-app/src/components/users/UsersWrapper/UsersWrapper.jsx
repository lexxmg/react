import React from 'react';
import './usersWrapper.css';
import Users from '../UsersComponent/Users';

const UserWrrapper = (props) => {
  return (
    <div className="users-wrapper">
      <h2 className="users-wrapper__tirle">Пользователи</h2>

      <div className="users-wrapper__content">
        {
          props.users.map(users => {
            return (
              <Users
                key={users.id}
                avatar={users.avatar}
                follow={users.follow}
                name={users.name}
                lastName={users.lastName}
                status={users.status}
                city={users.location.city}
                country={users.location.country}
                Follow={() => props.Follow(users.id)}
                UnFollow={() => props.UnFollow(users.id)}
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default UserWrrapper;
