import Top from './top/Top';
import User from './user/User';
import UserPost from './userPost/AddPost';
import Post from './post/Post';
import {
        actionCreatorAddPost,
        actionCreatorSetValuePost,
        actionCreatorGetFocusPost
      } from '../../redux/prof-reducer';
import { connect } from 'react-redux';


// const postsMap = posts.map((obj) => {
//   return (
//     <Post key={obj.id} name={obj.name} text={obj.post} img={obj.avatar}/>
//   )
// });

let MainContainer = (props) => {
  return (
    <div className="">
      <Top />
      <User />

      <UserPost
        addPost={props.addPost}
        setValuePost={props.setValuePost}
        textValue={props.textValue}
        focus={props.focus}
      />

      {
        props.posts.map((obj) => {
          return (
            <Post key={obj.id} name={obj.name} text={obj.post} img={obj.avatar}/>
          )
        })
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    textValue: state.prof.valuePost,
    posts: state.prof.posts
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
    }
  }
}

MainContainer = connect(mapStateToProps, mapDispatchToProps)(MainContainer);

export default MainContainer;
