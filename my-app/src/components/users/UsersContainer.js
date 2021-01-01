
//import React from 'react';
import UserWrrapper from './UsersWrapper/UsersWrapper';
import { connect } from 'react-redux';
import { followAC, unFollowAC, setUsersAC, currentPageAC, setStartPageAC } from '../../redux/users-reducer';

const mapStateToProps = (state) => {
  return {
    users: state.users.users,
    userCount: state.users.userCount,
    page: state.users.page,
    usersAllCount: state.users.usersAllCount,
    currentPage: state.users.currentPage,
    startPage: state.users.startPage
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserWrrapper);
