
import React from 'react';
import Top from './top/Top';
import User from './user/User';
import UserPost from './userPost/AddPost';
import Post from './post/Post';
//import { profileAPI } from '../../api/api';
import {
        actionCreatorAddPost,
        actionCreatorSetValuePost,
        actionCreatorGetFocusPost,
        getProfile
      } from '../../redux/prof-reducer';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { WithAuthRedirect } from '../../hoc/AuthRedirect'

// const postsMap = posts.map((obj) => {
//   return (
//     <Post key={obj.id} name={obj.name} text={obj.post} img={obj.avatar}/>
//   )
// });

class MainContainer extends React.Component {

  componentDidMount() {
    //this.props.togglePreload(true);
    let userId = this.props.match.params.userId;

    if (!userId) {
      userId = this.props.autch || 2
    }

    this.props.getProfile(userId);
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
    profile: state.prof.profile,
    autch: state.autch.id
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
    getProfile: (userId) => {
      dispatch(getProfile(userId));
    }
  }
}



// const hoc = (Component) => {
//   let Wrapper = (props) => {
//     if (!props.isAuth) {
//       return <Redirect to="/login" />
//     }
//     return <Component {...props} />
//   }
//   const mapStateToProps = (state) => {
//     return {isAuth: state.autch.isAuth}
//   }
//
//   return connect(mapStateToProps)(Wrapper);
// }

//const hocComponent = hoc(MainContainer);



const WithUrlDataContainerComponent = withRouter(MainContainer);

const WithAuth = WithAuthRedirect(WithUrlDataContainerComponent);

export default connect(mapStateToProps, mapDispatchToProps)(WithAuth);
