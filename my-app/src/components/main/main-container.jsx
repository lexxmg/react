import Top from './top/Top';
import User from './user/User';
import UserPost from './userPost/AddPost';
import Post from './post/Post';
import {
        actionCreatorAddPost,
        actionCreatorSetValuePost,
        actionCreatorGetFocusPost
      } from '../../redux/prof-reducer';


// const postsMap = posts.map((obj) => {
//   return (
//     <Post key={obj.id} name={obj.name} text={obj.post} img={obj.avatar}/>
//   )
// });

const MainContainer = (props) => {
  const state = props.store.getState();
  return (
    <div className="">
      <Top />
      <User />
      <UserPost
        addPost={addPost}
        setValuePost={setValuePost}
        textValue={ state.prof.valuePost }
        focus={focus}
      />

      {
        state.prof.posts.map((obj) => {
          return (
            <Post key={obj.id} name={obj.name} text={obj.post} img={obj.avatar}/>
          )
        })
      }
    </div>
  )


  function addPost(event) {
    event.preventDefault();

    const text = event.target.text.value;

    //props.addPost(text);
    props.store.dispatch(actionCreatorAddPost(text));
  }

  function setValuePost(e) {
    const text = e.target.value;
    //console.log(text);
    //props.setValuePost(text);
    props.store.dispatch(actionCreatorSetValuePost(text));
  }

  function focus() {
    props.store.dispatch( actionCreatorGetFocusPost() );
  }
}

export default MainContainer;
