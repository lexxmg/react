
import React from 'react';
import UserWrrapper from './UsersWrapper/UsersWrapper';
import { connect } from 'react-redux';
import { followAC, unFollowAC, setUsersAC, currentPageAC, setStartPageAC, preloaderAC } from '../../redux/users-reducer';
import * as axios from 'axios';

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.togglePreload(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.userCount}`)
      .then( (res) => {
        this.props.setUsers(res.data.items, res.data.totalCount);
        this.props.togglePreload(false);
      });
  }

  getUsers = (pages) => {
    this.props.togglePreload(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pages}&count=${this.props.userCount}`)
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
        Follow={this.props.Follow}
        UnFollow={this.props.UnFollow}
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

const mapDispatchToProps = (dispatch) => {
  return {
    Follow: (id) => {
      return dispatch(followAC(id));
    },
    UnFollow: (id) => {
      return dispatch(unFollowAC(id));
    },
    setUsers: (users, count) => {
      // console.log('container');
      // console.log(users);
      return dispatch(setUsersAC(users, count));
    },
    setCurrentPage: (page) => {
      return dispatch(currentPageAC(page));
    },
    setStartPage: (page) => {
      return dispatch(setStartPageAC(page));
    },
    togglePreload: (load) => {
      dispatch(preloaderAC(load));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
