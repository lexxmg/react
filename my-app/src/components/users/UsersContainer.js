
import React from 'react';
import UserWrrapper from './UsersWrapper/UsersWrapper';
import { connect } from 'react-redux';
import { followThunk, unfollowThunk, setCurrentPage, setStartPage, getUsersThunk } from '../../redux/users-reducer';

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsersThunk(this.props.currentPage, this.props.userCount);
  }

  getUsers = (pages) => {
    this.props.getUsersThunk(pages, this.props.userCount);

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
        followingInProgress={this.props.followingInProgress}
        startPage={this.props.startPage}
        userCount={this.props.userCount}
        currentPage={this.props.currentPage}
        users={this.props.users}
        follow={this.props.followThunk}
        unFollow={this.props.unfollowThunk}
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
    preload: state.users.preload,
    followingInProgress: state.users.followingInProgress
  }
}

const mapDispatchToProps = {
  followThunk,
  unfollowThunk,
  setCurrentPage,
  setStartPage,
  getUsersThunk
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
