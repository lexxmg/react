
import React from 'react';
import './usersWrapper.css';
import Users from '../UsersComponent/Users';
import * as axios from 'axios';
import noFoto from '../../../assets/images/images.jpeg';

class UserWrrapper extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.userCount}`)
      .then( (res) => {
        this.props.setUsers(res.data.items, res.data.totalCount);
      });
  }

  getUsers(pages) {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pages}&count=${this.props.userCount}`)
      .then( (res) => {
        this.props.setUsers(res.data.items, res.data.totalCount);
    });

    this.props.setCurrentPage(pages);

    if (pages === this.props.startPage + this.props.userCount) {
      //startPage = this.props.currentPage;
      this.props.setStartPage(pages);
    }

    if (pages === this.props.startPage - this.props.userCount) {
      //startPage = this.props.currentPage;
      this.props.setStartPage(pages);
    }
}

  render() {
    // console.log(`колличество пользователей ${this.props.usersAllCount}`);
    // let pagesCount = Math.ceil( this.props.usersAllCount / this.props.userCount );
    //
    // console.log(`колличество страниц ${pagesCount}`);

    let pages = [];




    for (let i = this.props.startPage; i <= this.props.userCount + this.props.startPage; i++) {
      pages.push(i);
    }

    const firstPage = (currentPage) => {
      if (currentPage - this.props.userCount < 0) {
        return currentPage;
      } else {
        return currentPage - this.props.userCount;
      }
    }

    return (
      <div className="users-wrapper">
        <h2 className="users-wrapper__tirle">Пользователи</h2>

        <ul className="users-wrapper__list wrapper-list">

          <li
            onClick={() => this.getUsers(firstPage(this.props.startPage))}
            className={this.props.currentPage === 1 ?
              "wrapper-list__item wrapper-list__item--acive" :
              "wrapper-list__item"}
          >{(this.props.startPage - this.props.userCount < 1) ? '' : this.props.startPage - this.props.userCount}
          </li>

          <span>...</span>

          {
            pages.map(pages => {
              return (
                <li
                  onClick={() => this.getUsers(pages)}
                  key={pages}
                  className={this.props.currentPage === pages ?
                    "wrapper-list__item wrapper-list__item--acive" :
                    "wrapper-list__item"}
                >{pages}</li>
              )
            })
          }
        </ul>

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
