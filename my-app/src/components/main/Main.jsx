import Top from './top/Top';
import User from './user/User';
import UserPost from './userPost/AddPost';
import Post from './post/Post';

const avatar = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkNClHcBngc-qOfx6OQ-rCm6L-xHp-t6R2QA&usqp=CAU';

const Main = () => {
  return (
    <main className="main">
      <Top />
      <User />
      <UserPost />

      <Post text="пропс это объект"/>
      <Post text="ghjgcc gthtlf§ncz rjvgjytynt rfr j,]trn" img={avatar} />
      <Post text="пропс передается как объект компонете"/>
    </main>
  )
}

export default Main;
