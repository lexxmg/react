import Top from './top/Top';
import User from './user/User';
import UserPost from './userPost/AddPost';
import Post from './post/Post';

const avatar = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkNClHcBngc-qOfx6OQ-rCm6L-xHp-t6R2QA&usqp=CAU';

const posts = [
  {name: 'Петя', post: 'werhwgng', avatar: '', id: '1'},
  {name: 'Вася', post: 'werhwgng', avatar: '', id: '2'},
  {name: 'Саша', post: 'werhwgng', avatar: '', id: '3'},
]

const Main = () => {
  return (
    <div className="">
      <Top />
      <User />
      <UserPost />

      <Post name={posts[0].name} text={posts[0].post}/>
      <Post text="ghjgcc gthtlf§ncz rjvgjytynt rfr j,]trn" img={avatar} />
      <Post text="пропс передается как объект компонете"/>
    </div>
  )
}

export default Main;
