import Top from './top/Top';
import User from './user/User';
import UserPost from './userPost/AddPost';
import Post from './post/Post';

// const postsMap = posts.map((obj) => {
//   return (
//     <Post key={obj.id} name={obj.name} text={obj.post} img={obj.avatar}/>
//   )
// });

const Main = (props) => {
  //debugger;
  return (
    <div className="">
      <Top />
      <User />
      <UserPost prof={props.prof}
        dispatch={props.dispatch}
      />

      {
        props.prof.posts.map((obj) => {
          return (
            <Post key={obj.id} name={obj.name} text={obj.post} img={obj.avatar}/>
          )
        })
      }
    </div>
  )
}

export default Main;
