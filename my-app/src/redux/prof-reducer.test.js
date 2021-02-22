
import profReducer, { actionCreatorAddPost } from './prof-reducer';

const initialState = {
  profile: null,
  userStatus: '',
  posts: [
    {name: 'Петя', post: 'werhwgng', avatar: null, id: '1'},
    {name: 'Вася', post: 'werhwgng', avatar: null, id: '2'},
    {name: 'Даша', post: 'werhwgng', avatar: null, id: '3'}
  ],
  random: ''
}

it('new post should do added', () => {
  const action = actionCreatorAddPost('new text');
  const newState = profReducer(initialState, action);

  expect(newState.posts.length).toBe(4);
})
