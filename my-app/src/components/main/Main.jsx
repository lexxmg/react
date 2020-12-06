import Top from './top/Top';
import User from './user/User';
import UserPost from './userPost/AddPost';
import Post from './post/Post';

const avatar = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkNClHcBngc-qOfx6OQ-rCm6L-xHp-t6R2QA&usqp=CAU';

const posts = [
  {name: 'Петя', post: 'werhwgng', avatar: avatar, id: '1'},
  {name: 'Вася', post: 'werhwgng', avatar: '', id: '2'},
  {name: 'Саша', post: 'werhwgng', avatar: '', id: '3'},
  {name: 'Даша', post: 'werhwgng', avatar: avatar, id: '4'}
]

// const postsMap = posts.map((obj) => {
//   return (
//     <Post key={obj.id} name={obj.name} text={obj.post} img={obj.avatar}/>
//   )
// });

const Main = () => {
  return (
    <div className="">
      <Top />
      <User />
      <UserPost />

      {
        posts.map((obj) => {
          return (
            <Post key={obj.id} name={obj.name} text={obj.post} img={obj.avatar}/>
          )
        })
      }
    </div>
  )
}

export default Main;
