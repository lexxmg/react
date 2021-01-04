
import React from 'react';
import Top from './top/Top';
import User from './user/User';
import UserPost from './userPost/AddPost';
import Post from './post/Post';
import * as axios from 'axios';
import {
        actionCreatorAddPost,
        actionCreatorSetValuePost,
        actionCreatorGetFocusPost,
        setUsersProfile
      } from '../../redux/prof-reducer';
import { connect } from 'react-redux';


// const postsMap = posts.map((obj) => {
//   return (
//     <Post key={obj.id} name={obj.name} text={obj.post} img={obj.avatar}/>
//   )
// });

class MainContainer extends React.Component {

  componentDidMount() {
    //this.props.togglePreload(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/13684`)
      .then( (res) => {
        console.log(res.data);
        this.props.setUsersProfile(res.data);
        // this.props.togglePreload(false);
      });
  }

  render() {
    return (
      <div className="">
        <Top />
        <User {...this.props.profile} profile={this.props.profile}/>

        <UserPost
          addPost={this.props.addPost}
          setValuePost={this.props.setValuePost}
          textValue={this.props.textValue}
          focus={this.props.focus}
        />

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
    textValue: state.prof.valuePost,
    posts: state.prof.posts,
    profile: state.prof.profile
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (event) => {
      event.preventDefault();

      const text = event.target.text.value;
      dispatch(actionCreatorAddPost(text));
    },
    setValuePost: (e) => {
      const text = e.target.value;
      dispatch(actionCreatorSetValuePost(text));
    },
    focus: () => {
      dispatch( actionCreatorGetFocusPost() );
    },
    setUsersProfile: (profile) => {
      dispatch(setUsersProfile(profile));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
