import React from 'react';
import './usersWrapper.css';
import Users from '../UsersComponent/Users';


const avatar = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkNClHcBngc-qOfx6OQ-rCm6L-xHp-t6R2QA&usqp=CAU';

const usersA = [
  {
    avatar: avatar, follow: true, name: 'Вася', lastName: 'иванов', status: 'Super Man',
    location: {city: 'Moscov', country: 'Russia'}, id: '1'
  },
  {
    avatar: avatar, follow: false, name: 'Петя', lastName: '', status: 'Super star',
    location: {city: 'Moscov', country: 'Russia'}, id: '2'
  }
];

const UserWrrapper = (props) => {

  if (props.users.length === 0) {
    props.setUsers(usersA);
  }

  return (
    <div className="users-wrapper">
      <h2 className="users-wrapper__tirle">Пользователи</h2>

      <div className="users-wrapper__content">
        {
          props.users.map(user => {
            console.log('map');
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
