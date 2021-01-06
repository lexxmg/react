
import React from 'react';
import UserWrrapper from './UsersWrapper/UsersWrapper';
import { connect } from 'react-redux';
import { follow, unFollow, setUsers, setCurrentPage, setStartPage, togglePreload } from '../../redux/users-reducer';
import * as axios from 'axios';

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.togglePreload(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.userCount}`,
      {withCredentials: true}
    )
      .then( (res) => {
        this.props.setUsers(res.data.items, res.data.totalCount);
        this.props.togglePreload(false);
      });
  }

  getUsers = (pages) => {
    this.props.togglePreload(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pages}&count=${this.props.userCount}`,
      {withCredentials: true}
    )
      .then( (res) => {
        this.props.setUsers(res.data.items, res.data.totalCount);
        this.props.togglePreload(false);
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
    return (
      <UserWrrapper
        startPage={this.props.startPage}
        userCount={this.props.userCount}
        currentPage={this.props.currentPage}
        users={this.props.users}
        follow={this.props.follow}
        unFollow={this.props.unFollow}
        getUsers={this.getUsers}
        preload={this.props.preload}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users.users,
    userCount: state.users.userCount,
    usersAllCount: state.users.usersAllCount,
    currentPage: state.users.currentPage,
    startPage: state.users.startPage,
    preload: state.users.preload
  }
}

const mapDispatchToProps = {
  follow,
  unFollow,
  setUsers,
  setCurrentPage,
  setStartPage,
  togglePreload
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
