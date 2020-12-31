
import React from 'react';
import './usersWrapper.css';
import Users from '../UsersComponent/Users';
import * as axios from 'axios';
//import avatar from '../../../assets/images/happy-birthday.png';
import noFoto from '../../../assets/images/images.jpeg';

// const usersA = [
//   {
//     avatar: avatar, follow: true, name: 'Вася', lastName: 'иванов', status: 'Super Man',
//     location: {city: 'Moscov', country: 'Russia'}, id: '1'
//   },
//   {
//     avatar: avatar, follow: false, name: 'Петя', lastName: '', status: 'Super star',
//     location: {city: 'Moscov', country: 'Russia'}, id: '2'
//   }
// ];

class UserWrrapper extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    //this.props.setUsers(usersA);

    axios.get('https://social-network.samuraijs.com/api/1.0/users')
      .then( (res) => this.props.setUsers(res.data.items) );
  }

  render() {
    return (
      <div className="users-wrapper">
        <h2 className="users-wrapper__tirle">Пользователи</h2>

        <div className="users-wrapper__content">
          {
            this.props.users.map(user => {
              console.log('map');
              return (
                <Users
                  key={user.id}
                  avatar={user.photos.small ? user.photos.small : noFoto}
                  follow={user.followed}
                  name={user.name}
                  lastName={'user.lastName'}
                  status={user.status}
                  city={'user.location.city'}
                  country={'user.location.country'}
                  id={user.id}
                  Follow={this.props.Follow}
                  UnFollow={this.props.UnFollow}
                />
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default UserWrrapper;
