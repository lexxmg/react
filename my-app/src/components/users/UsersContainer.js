
import React from 'react';
import UserWrrapper from './UsersWrapper/UsersWrapper';
import { connect } from 'react-redux';
import { follow, unFollow, setUsers, setCurrentPage, setStartPage, togglePreload } from '../../redux/users-reducer';
import { getUsersApi } from '../../api/api';

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.togglePreload(true);

    getUsersApi(this.props.currentPage, this.props.userCount).then( data => {
      this.props.setUsers(data.items, data.totalCount);
      this.props.togglePreload(false);
    });
  }

  getUsers = (pages) => {
    this.props.togglePreload(true);

    getUsersApi(pages, this.props.userCount).then( data => {
      this.props.setUsers(data.items, data.totalCount);
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
