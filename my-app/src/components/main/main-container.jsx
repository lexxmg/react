import Top from './top/Top';
import User from './user/User';
import UserPost from './userPost/AddPost';
import Post from './post/Post';
import {
        actionCreatorAddPost,
        actionCreatorSetValuePost,
        actionCreatorGetFocusPost
      } from '../../redux/prof-reducer';
import StoreContext from '../../StoreContext';


// const postsMap = posts.map((obj) => {
//   return (
//     <Post key={obj.id} name={obj.name} text={obj.post} img={obj.avatar}/>
//   )
// });

const MainContainer = (props) => {
  return (
    <div className="">
      <Top />
      <User />
      <StoreContext.Consumer>
        {
          (store) => {
            function addPost(event) {
              event.preventDefault();

              const text = event.target.text.value;
              store.dispatch(actionCreatorAddPost(text));
            }

            function setValuePost(e) {
              const text = e.target.value;
              store.dispatch(actionCreatorSetValuePost(text));
            }

            function focus() {
              store.dispatch( actionCreatorGetFocusPost() );
            }

            return (
              <UserPost
                addPost={addPost}
                setValuePost={setValuePost}
                textValue={ store.getState().prof.valuePost }
                focus={focus}
              />
            )
          }
        }
      </StoreContext.Consumer>

      <StoreContext.Consumer>
        {
          (store) => {
            return ( store.getState().prof.posts.map((obj) => {
              return (
                  <Post key={obj.id} name={obj.name} text={obj.post} img={obj.avatar}/>
                )
              })
            )
          }
        }
      </StoreContext.Consumer>
    </div>
  )
}

export default MainContainer;
