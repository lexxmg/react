
import profReducer, { actionCreatorAddPost, deletePost } from './prof-reducer';

const initialState = {
  profile: null,
  userStatus: '',
  posts: [
    {name: 'Петя', post: 'werhwgng', avatar: null, id: 1},
    {name: 'Вася', post: 'werhwgng', avatar: null, id: 2},
    {name: 'Даша', post: 'werhwgng', avatar: null, id: 3}
  ],
  random: ''
}

it('new post should do added', () => {
  const action = actionCreatorAddPost('new text');
  const newState = profReducer(initialState, action);

  expect(newState.posts.length).toBe(4);
});

it('add post text', () => {
  const action = actionCreatorAddPost('new text');
  const newState = profReducer(initialState, action);

  expect(newState.posts[3].post).toBe('new text');
});

it('delete post', () => {
  const action = deletePost(1);
  const newState = profReducer(initialState, action);

  expect(newState.posts.length).toBe(2);
});
