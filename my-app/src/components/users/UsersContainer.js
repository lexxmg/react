import React from 'react';
import UserWrrapper from './UsersWrapper/UsersWrapper';
import { connect } from 'react-redux';
import { followAC, unFollowAC, setUsersAC } from '../../redux/users-reducer';
import * as axios from 'axios';

const mapStateToProps = (state) => {
  //console.log(state.users.users);
  return {
    users: state.users.users
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
    setUsers: (users) => {
      // console.log('container');
      // console.log(users);
      return dispatch(setUsersAC(users));
    }
  }
}

// axios.get('https://social-network.samuraijs.com/api/1.0/users')
//   .then( (res) => console.log(res.data.items) );

export default connect(mapStateToProps, mapDispatchToProps)(UserWrrapper);
