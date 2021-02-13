
import React from 'react';
import Top from './top/Top';
import User from './user/User';
import UserPost from './userPost/AddPost';
import Post from './post/Post';
import ProfileStatus from './profileStatus/ProfileStatus';
//import { profileAPI } from '../../api/api';
import {
        actionCreatorAddPost,
        getProfile,
        getUserStatus,
        updateUserStatus
      } from '../../redux/prof-reducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter, Redirect } from 'react-router-dom';
import { WithAuthRedirect } from '../../hoc/AuthRedirect'

// const postsMap = posts.map((obj) => {
//   return (
//     <Post key={obj.id} name={obj.name} text={obj.post} img={obj.avatar}/>
//   )
// });

class MainContainer extends React.Component {

  getUser(id) {
    this.props.getProfile(id);
    this.props.getUserStatus(id);
  }

  componentDidMount() {
    //this.props.togglePreload(true);
    let userId = this.props.match.params.userId;

    if (userId) {
      this.getUser(userId);
    } else {
      userId = this.props.autch;
      this.getUser(userId);
    }
  }

  render() {
    if (!this.props.isAuth && !this.props.match.params.userId) {
      return <Redirect to="/login" />
    }

    return (
      <div className="">
        <Top />
        <User {...this.props.profile} profile={this.props.profile}/>

        <ProfileStatus
          userStatus={this.props.userStatus}
          updateUserStatus={this.props.updateUserStatus}
          currentProfile={this.props.profile}
          authId={this.props.autch}
        />

        <UserPost addPost={this.props.addPost} />

        {
          this.props.posts.map((obj) => {
            return (
              <Post key={obj.id} name={obj.name} text={obj.post} img={obj.avatar}/>
            )
          })
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.prof.posts,
    profile: state.prof.profile,
    userStatus: state.prof.userStatus,
    autch: state.autch.id,
    isAuth: state.autch.isAuth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (formData) => {
      //console.log(formData.text);
      dispatch(actionCreatorAddPost(formData.text));
    },
    getProfile: (userId) => {
      dispatch(getProfile(userId));
    },
    getUserStatus: (userId) => {
      dispatch(getUserStatus(userId));
    },
    updateUserStatus: (status) => {
      dispatch(updateUserStatus(status));
    }
  }
}
//WithAuthRedirect
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,

)(MainContainer);
