
import React from 'react';
import Top from './top/Top';
import User from './user/User';
import UserPost from './userPost/AddPost';
import Post from './post/Post';
import ProfileStatus from './profileStatus/ProfileStatus';
import {
        actionCreatorAddPost,
        getProfile,
        getUserStatus,
        updateUserStatus
       } from '../../redux/prof-reducer';
import { getPostsReselect,
         getAuthProfile,
         userStatus
} from '../../redux/prof-selectors';
import { getUserId, getIsAuthState } from '../../redux/auth-selectors';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter, Redirect } from 'react-router-dom';
//import { WithAuthRedirect } from '../../hoc/AuthRedirect'

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
      if (userId) {
        this.getUser(userId);
      }
    }
  }

  render() {
    //console.log('main render');
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
  //console.log('mapStateToProps');
  return {
    posts: getPostsReselect(state),
    profile: getAuthProfile(state),
    userStatus: userStatus(state),
    autch: getUserId(state),
    isAuth: getIsAuthState(state)
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
