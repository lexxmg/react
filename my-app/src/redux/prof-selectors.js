
import { createSelector } from 'reselect';

export const getPosts = (state) => {
  return state.prof.posts;
}

export const getPostsReselect = createSelector(getPosts, (posts) => {
  return posts.filter(u => {
    return true //u.name === 'Вася';
  });
});

export const getAuthProfile = (state) => {
  return state.prof.profile;
}

export const userStatus = (state) => {
  return state.prof.userStatus;
}

export const getEditMode = (state) => {
  return state.prof.profileEditMode
}
