
import React from 'react';
import UserWrrapper from './UsersWrapper/UsersWrapper';
import { connect } from 'react-redux';
import { followThunk,
          unfollowThunk,
          setCurrentPage,
          getUsersThunk
        } from '../../redux/users-reducer';
import { getUsers,
         getUsersCount,
         getUsersAllCount,
         getCurrentPage,
         getStatePreload,
         getFollowingInProgress
} from '../../redux/users-selectors';

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
        userCount={this.props.userCount}
        usersAllCount={this.props.usersAllCount}
        currentPage={this.props.currentPage}
        getUsersThunk={this.props.getUsersThunk}
        users={this.props.users}
        follow={this.props.followThunk}
        unFollow={this.props.unfollowThunk}
        preload={this.props.preload}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    userCount: getUsersCount(state),
    usersAllCount: getUsersAllCount(state),
    currentPage: getCurrentPage(state),
    preload:getStatePreload(state),
    followingInProgress: getFollowingInProgress(state)
  }
}

const mapDispatchToProps = {
  followThunk,
  unfollowThunk,
  setCurrentPage,
  getUsersThunk
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
