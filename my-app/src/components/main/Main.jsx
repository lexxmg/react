import Top from './top/Top';
import User from './user/User';
import UserPost from './userPost/AddPost';
import Post from './post/Post';

const Main = () => {
  return (
    <main className="main">
      <Top />
      <User />
      <UserPost />
      
      <Post />
      <Post />
      <Post />
    </main>
  )
}

export default Main;
