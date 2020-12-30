const FOLLOW = 'FOLLOW',
      UNFOLLOW = 'UNFOLLOW',
      SHOW_MORE = 'SHOW-MORE',
      SET_USERS = 'SET-USERS';


export const followAC = (id) => {
  return {type: FOLLOW, id};
}

export const unFollowAC = (id) => {
  return {type: UNFOLLOW, id};
}

export const showMoreAC = (count) => {
  return {type: SHOW_MORE, count};
}

export const setUsersAC = (users) => {
  return {type: SET_USERS, users};
}

const avatar = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkNClHcBngc-qOfx6OQ-rCm6L-xHp-t6R2QA&usqp=CAU';

const initialState =  {
  users: []
}

const usersReducer =  (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
    console.log('UnFollow');
      return {...state, users: state.users.map(user => {
          if (user.id === action.id) {
            return {...user, follow: true};
          } else {
            return user;
          }
        })
      }
    case UNFOLLOW:
    console.log('unfollow');
    return {...state, users: state.users.map(user => {
        if (user.id === action.id) {
          return {...user, follow: false};
        } else {
          return user;
        }
      })
    }
    case SHOW_MORE:
      return {...state};
    case SET_USERS:
    console.log('>>>>>>>>>>>>>>>>>>>>');
    console.log(state);
    console.log(action.users);
    console.log({...state, users: [...state.users, ...action.users]});
    console.log('>>>>>>>>>>>>>>>>>>>>');
      return {...state, users: [...state.users, ...action.users]};
    default:
      return state;
  }
}

export default usersReducer;
