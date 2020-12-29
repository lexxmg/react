import React from 'react';
import UserWrrapper from './UsersWrapper/UsersWrapper';
import { connect } from 'react-redux';
import { followAC, unFollowAC } from '../../redux/users-reducer';

const mapStateToProps = (state) => {
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserWrrapper);
